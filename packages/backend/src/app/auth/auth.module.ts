import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Login } from '../Entitiy/login.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Login])],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
