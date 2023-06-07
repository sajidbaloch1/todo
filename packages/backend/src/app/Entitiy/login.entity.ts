import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AuthService } from '../auth/auth.service';
@Entity('logins')
export class Login {
  constructor(private authServuice: AuthService) {}
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await this.authServuice.hashPassword(this.password);
  }
}