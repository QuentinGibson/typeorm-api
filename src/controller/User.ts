import { Request, Response } from 'express'
import { User } from '../entity/User'
import { AppDataSource } from '../data-source'
// register routes
export async function getUsers(_req: Request, res: Response) {
  const users = await AppDataSource.getRepository(User).find()
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
  return res.status(201).json({ msg: results })
}

export async function updateUser(req: Request, res: Response) {
  const id = Number(req.params.id)
  const user = await AppDataSource.getRepository(User).findOneBy({ id })
  AppDataSource.getRepository(User).merge(user, req.body.user)
  await AppDataSource.getRepository(User).save(user)
  res.status(202).json({ msg: "User updated!" })
}

export async function deleteUser(req: Request, res: Response) {
  const id = Number(req.params.id)
  const results = await AppDataSource.getRepository(User).delete(id)
  return res.status(203).json({ msg: results })
}
