import { User } from "../entities/user.entity";
import { Task } from "../entities/task.entity";

export class UpdateProjectDto {
	name?: string;
	description?: string;
	status?: string;
	user?: User;
	tasks?: Task[];
}