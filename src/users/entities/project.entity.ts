import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Task } from './task.entity';
import { Optional } from '@nestjs/common';

@Entity('projects')
export class Project {
	@PrimaryGeneratedColumn()
	id: number;
  
	@Column()
	name: string;
  
	@Column()
	@Optional()
	description: string;
  
	@Column()
	status: string;
  
	@ManyToOne(() => User, user => user.projects)
	user: User;
  
	@OneToMany(() => Task, task => task.project)
	tasks: Task[];

}