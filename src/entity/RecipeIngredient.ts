import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class RecipeIngredient {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string
}
