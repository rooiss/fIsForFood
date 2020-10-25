import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  image: string

  @Column()
  video: string

  @Column()
  servings: number
}
