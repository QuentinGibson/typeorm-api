import { Request, Response } from 'express'
import { User } from '../entity/User'
import { AppDataSource } from '../data-source'
import { Status } from '../entity/Status'
// register routes
export async function getUsers(_req: Request, res: Response) {
  const users = await AppDataSource.getRepository(User).find({
    relations: {
      status: true
    }
  })
  res.status(201).json({ msg: "Users found!", users })
}

export async function getUserById(req: Request, res: Response) {
  const id = req.body.id
  const user = await AppDataSource.getRepository(User).findOneBy({ id })
  res.status(201).json({ msg: "User found!", user })
}

export async function createUser(req: Request, res: Response) {
  const user = AppDataSource.getRepository(User).create(req.body.user)
  const results = await AppDataSource.getRepository(User).save(user)
  res.status(201).json({ msg: results })
}

export async function updateUser(req: Request, res: Response) {
  const id = Number(req.params.id)
  const user = await AppDataSource.getRepository(User).findOneBy({ id })
  AppDataSource.getRepository(User).merge(user, req.body.user)
  await AppDataSource.getRepository(User).save(user)
  res.status(202).json({ msg: "User updated!" })
}

export async function setUserStatus(req: Request, res: Response) {
  const id = Number(req.params.id)
  const status_id = Number(req.body.status.id)
  const user = await AppDataSource.getRepository(User).findOneBy({ id })
  const status = await AppDataSource.getRepository(Status).findOneBy({ id: status_id })

  user.status = status
  await AppDataSource.getRepository(User).save(user)
  res.status(201).json({ msg: "User status set!" })
}

export async function deleteUser(req: Request, res: Response) {
  const id = Number(req.params.id)
  const results = await AppDataSource.getRepository(User).delete(id)
  res.status(203).json({ msg: results })
}
