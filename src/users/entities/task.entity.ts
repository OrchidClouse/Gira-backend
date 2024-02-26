import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Project } from './project.entity';
import { Optional } from '@nestjs/common';

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({nullable: true})
  @Optional()
  description: string;

  @ManyToOne(() => Project, project => project.tasks)
  project: Project;
}