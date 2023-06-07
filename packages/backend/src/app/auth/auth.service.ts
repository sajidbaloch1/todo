import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Login } from '../Entitiy/login.entity';
import { Repository } from 'typeorm';
import { compare, hash } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(Login)
    private loginRepo: Repository<Login>
  ) {}

  async validateUser(email: string, pass: string): Promise<Login | null> {
    const user = await this.loginRepo.findOneByOrFail({ email });
    if (user && (await compare(pass, user.password))) {
      return user;
    }
    return null;
  }

  async generateToken(user: Login): Promise<string> {
    const payload = { email: user.email, sub: user.id };
    return this.jwtService.signAsync(payload);
  }

  async hashPassword(pass: string): Promise<string> {
    const saltRound = 10;
    return hash(pass, saltRound);
  }
}
