import * as express from 'express'
const router = express.Router()
import { createUser, deleteUser, getUserById, getUsers, updateUser } from "../controller/User"

router.get("/", getUsers)

router.get("/:id", getUserById)

router.post("/", createUser)

router.put("/:id", updateUser)

router.delete("/:id", deleteUser)

export default router
