import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProjectService } from './project.service';
// import { CreateProjectDto } from './dto/create-project.dto';
// import { UpdateProjectDto } from './dto/update-project.dto';
import { CreateProjectDto } from 'src/users/dto/create-project.dto';
import { UpdateProjectDto } from 'src/users/dto/update-project.dto';
import { Project } from 'src/users/entities/project.entity';


@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  async createProject(@Body() createProjectDto: CreateProjectDto) {
    return this.projectService.createProject(createProjectDto);
  }

  @Get()
  async getProjects() {
    return this.projectService.getProjects();
  }

  @Get(':id')
  async getProjectById(@Param('id') id: number) {
    return this.projectService.getProjectById(id);
  }

  @Get('user/:userId')
  async getProjectsByUserId(@Param('userId') userId: number): Promise<Project[]> {
    return this.projectService.getProjectsByUserId(userId);
  }

  @Put(':id')
  async updateProject(@Param('id') id: number, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectService.updateProject(id, updateProjectDto);
  }
  @Get()
  async getTask(){
    return this.projectService.getTask()
  }

//   @Delete(':id')
//   async deleteProject(@Param('id') id: number) {
//     return this.projectService.deleteProject(id);
//   }
}