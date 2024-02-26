import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { ProjectService } from './project.service';
// import { ProjectController } from './project.controller';
// import { Project } from '../users/entities/project.entity';
import { Task } from 'src/users/entities/task.entity';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { Project } from 'src/users/entities/project.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task, Project])],
  providers: [TaskService],
  controllers: [TaskController],
  exports: [TaskService],
})
export class TaskModule {}