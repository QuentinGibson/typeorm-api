import { Request, Response } from 'express'
import { Status } from '../entity/Status'
import { AppDataSource } from '../data-source'

export async function getAllStatus(_req: Request, res: Response) {
  const allStatus = await AppDataSource.getRepository(Status).find()
  res.status(201).json({ msg: "Status found!", allStatus })
}

export async function getStatusById(req: Request, res: Response) {
  const id = Number(req.params.id)
  const status = await AppDataSource.getRepository(Status).findOneBy({ id })
  res.status(201).json({ msg: "Status found!", status })
}

export async function createStatus(req: Request, res: Response) {
  const status = AppDataSource.getRepository(Status).create(req.body.status)
  const results = await AppDataSource.getRepository(Status).save(status)
  res.status(201).json({ msg: "Status created!", results })

}
export async function updateStatus(req: Request, res: Response) {
  const id = Number(req.params.id)
  const status = await AppDataSource.getRepository(Status).findOneBy({ id })
  AppDataSource.getRepository(Status).merge(status, req.body.status)
  await AppDataSource.getRepository(Status).save(status)
  res.status(201).json({ msg: "Status updated!" })
}

export async function deleteStatus(req: Request, res: Response) {
  const id = Number(req.params.id)
  const results = await AppDataSource.getRepository(Status).delete(id)
    .catch(error => console.log(error))
  res.status(203).json({ msg: results })
}
