import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { User } from './User'

@Entity()
export class Status {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  // @ManyToOne(() => User, user => user.status, { onDelete: "SET NULL" })
  // users: User[]
}
