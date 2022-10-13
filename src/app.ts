import * as express from "express"
import helmet from 'helmet'
import * as bodyParser from 'body-parser'
import * as errorhandler from 'errorhandler'
import * as cors from 'cors'
import { AppDataSource } from './data-source'
import userRouter from './routes/User'
import statusRouter from './routes/Status'

//establish data connection
AppDataSource
  .initialize()
  .then(() => {
    console.log("Data source has been initialized")
  })
  .catch(error => {
    console.error("Error during initialization:", error)
  })

// create and setup express app
const app = express()
app.use(cors())
app.use(helmet({ crossOriginResourcePolicy: { policy: "same-site" } }))
app.use(bodyParser.json())
app.use("/api/user", userRouter)
app.use("/api/status", statusRouter)

if (process.env.NODE_ENV === "development") {
  app.use(errorhandler())
}

export default app
