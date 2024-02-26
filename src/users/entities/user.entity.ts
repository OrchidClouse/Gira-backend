import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Project } from './project.entity';
import { Task } from './task.entity';
import { Comment } from './comment.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Project, project => project.user)
  projects: Project[];

  // @OneToMany(() => Task, task => task.user)
  // tasks: Task[];

  @OneToMany(() => Comment, comment => comment.user)
  comments: Comment[];
  
}