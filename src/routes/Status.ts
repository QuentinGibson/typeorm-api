import * as express from 'express'
const router = express.Router()
import { getAllStatus, createStatus, deleteStatus, getStatusById, updateStatus } from '../controller/Status'

router.get("/", getAllStatus)

router.get("/:id", getStatusById)

router.post("/", createStatus)

router.put("/:id", updateStatus)

router.delete("/:id", deleteStatus)

export default router
