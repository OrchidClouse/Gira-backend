import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from 'src/users/entities/task.entity';
import { CreateTaskDto } from 'src/users/dto/create-task-dto';
import { Project } from 'src/users/entities/project.entity';
import { Body } from '@nestjs/common';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,

    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {}

  async addTaskToProject(projectId: number, @Body() taskData: CreateTaskDto): Promise<Task> {
    const project = await this.projectRepository.findOne({ where: { id: projectId } });
    if (!project) {
      throw new Error('Project not found');
    }
  
    const newTask = new Task();
    newTask.name = taskData.name;
    newTask.description = taskData.description;

    newTask.project = project;

    const savedTask = await this.taskRepository.save(newTask);
    return savedTask;
  }

  async getTasksByProjectId(projectId: number): Promise<Task[]> {
    return this.taskRepository.find({ where: { project: { id: projectId } } });
  }

  // async findAll(projectId: string) {
	// return this.tasksRepository.find({ where: { project: { id: Number(projectId) } } });
  // }
}