import { Request, Response } from 'express';

export interface ITodoController {
  listTodo(req: Request, res: Response): void
  addTodo(req: Request, res: Response): void
  recoverTodo(req: Request, res: Response): void
  deleteTodo(req: Request, res: Response): void
}