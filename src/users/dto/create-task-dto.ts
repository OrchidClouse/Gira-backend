import { User } from "../entities/user.entity";
import { Project } from "../entities/project.entity";

export class CreateTaskDto {
  name: string;
  description?: string;
  status: string;
  priority: string;
  user: User;
  project: Project;
}