import { Request, Response } from 'express';

export interface ITodoController {
  listTodo(req: Request, res: Response): void
  listTodoItems(req: Request, res: Response): void
  addTodo(req: Request, res: Response): void
  addTodoItem(req: Request, res: Response): void
  recoverTodo(req: Request, res: Response): void
  deleteTodo(req: Request, res: Response): void
  deleteTodoItem(req: Request, res: Response): void
  updateTodo(req: Request, res: Response): void
  updateTodoItem(req: Request, res: Response): void
}