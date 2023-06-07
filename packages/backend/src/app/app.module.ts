import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './Entitiy/employee.entity';
import { EmployeeModule } from './employee/employee.module';
import { Users1685517347970 } from '../migrations/1685517347970-Users';
import { User } from './Entitiy/user.entity';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';

const defaultOptions: any = {
  type: 'postgres',
  port: 5432,
  username: 'postgres',
  password: 'ADMIN123',
  database: 'db',
  synchronize: true,
};

@Module({
  imports: [
    JwtModule.register({
      secret: 'hello',
      signOptions: { expiresIn: '1h' },
    }),
    TypeOrmModule.forRoot({
      ...defaultOptions,
      host: 'localhost',
      entities: [Employee, User],
      migrations: [Users1685517347970],
    }),
    EmployeeModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
