import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from '../users/entities/project.entity';
import { CreateProjectDto } from 'src/users/dto/create-project.dto';
import { UpdateProjectDto } from 'src/users/dto/update-project.dto';
import { User } from '../users/entities/user.entity';

@Injectable()
export class ProjectService {
	constructor(
		@InjectRepository(Project)
		private projectRepository: Repository<Project>,
	  ) {}
	  
	async createProject(createProjectDto: CreateProjectDto): Promise<Project> {
		const newProject = new Project();
		newProject.name = createProjectDto.name;
		newProject.description = createProjectDto.description;
		newProject.status = createProjectDto.status
		newProject.user = createProjectDto.user
		newProject.tasks = createProjectDto.tasks
		
		return this.projectRepository.save(newProject);
	}
	async getProjectById(id: number): Promise<Project> {
		return this.projectRepository.findOneBy({id});
	}

	async getProjectsByUserId(userId: number): Promise<Project[]> {
		return this.projectRepository.find({ where: { user: { id: userId } } });
	}
	  
	  async getProjects(): Promise<Project[]> {
		return this.projectRepository.find();
	}
	async getTask() : Promise<Project[]>{
		return this.projectRepository.find()
	}

	async updateProject(id: number, updateProjectDto: UpdateProjectDto): Promise<Project> {
		const existingProject = await this.projectRepository.findOneBy({id});
		existingProject.name = updateProjectDto.name || existingProject.name;
		existingProject.description = updateProjectDto.description || existingProject.description;
		existingProject.status = updateProjectDto.status || existingProject.status;
		existingProject.user = updateProjectDto.user || existingProject.user;
		existingProject.tasks = updateProjectDto.tasks || existingProject.tasks;
	  
		return this.projectRepository.save(existingProject);
	  }
}
