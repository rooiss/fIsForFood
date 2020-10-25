import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class RecipeStep {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string
}
