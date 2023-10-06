import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { UserEntity } from './users/entities/user.entity';

import {ConfigModule} from '@nestjs/config'
import {TypeOrmModule} from '@nestjs/typeorm'
import { config } from 'dotenv';
config();

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: Number(process.env.DB_PORT) || 5432,
      username: 'postgres',
      password: String("sing4500"),
      database: 'gira-database',
      entities: [UserEntity],
      synchronize: true,
    }),

    AuthModule,
    UsersModule
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
