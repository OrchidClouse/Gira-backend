import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from 'src/users/dto/create-task-dto';

@Controller('projects/:projectId/tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
  @Post()
  async addTaskToProject(@Param('projectId') projectId: number, @Body() taskData: CreateTaskDto): Promise<any> {
    const task = await this.taskService.addTaskToProject(projectId, taskData);
    return task;
  }

  @Get()
  async getTasksByProjectId(@Param('projectId') projectId: number): Promise<any> {
    const tasks = await this.taskService.getTasksByProjectId(projectId);
    return tasks;
  }
}