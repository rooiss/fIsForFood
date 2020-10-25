import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Comment {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string
}
