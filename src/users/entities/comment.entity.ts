import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Task } from './task.entity';

import { User } from './user.entity';

@Entity('comments')
export class Comment {
	@PrimaryGeneratedColumn()
	id: number;
  
	@Column()
	text: string;
  
	// @ManyToOne(() => Task, task => task.comments)
	// task: Task;
  
	@ManyToOne(() => User, user => user.comments)
	user: User;
}