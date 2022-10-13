import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Status } from "./Status"

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 125, unique: true, type: String })
  email: string

  @Column({ length: 200, type: String })
  password: string

  @Column({ default: () => "CURRENT_TIMESTAMP" })
  last_login: Date

  @Column({ default: () => "CURRENT_TIMESTAMP" })
  creation: Date

  // @ManyToOne(() => Status, status => status.users, { onDelete: "NO ACTION" })
  // status: Status
}
