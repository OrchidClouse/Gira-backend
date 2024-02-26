import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';

import {ConfigModule} from '@nestjs/config'
import {TypeOrmModule} from '@nestjs/typeorm'
import { config } from 'dotenv';
import { Project } from './users/entities/project.entity';
import { Task } from './users/entities/task.entity';
import { Comment } from './users/entities/comment.entity';
import { ProjectModule } from './project/project.module';
import { TaskModule } from './task/task.module';

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
      entities: [User, Comment, Project, Task],
      synchronize: true,
    }),

    TaskModule,
    AuthModule,
    UsersModule,
    ProjectModule
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
