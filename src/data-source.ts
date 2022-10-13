import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Status } from './entity/Status'
import * as dotenv from 'dotenv'

dotenv.config()


if (process.env.NODE_ENV === "production") {

} else if (process.env.NODE_ENV === "test") {

} else {

}
const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
})
export { AppDataSource }
