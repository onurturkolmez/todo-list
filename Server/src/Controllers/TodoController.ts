import { Request, Response } from 'express';
import { ResponseCodes } from "../Helpers/Constant";
import { PostgreSQL } from '../Init/PostgreSQL';
import { ITodoController } from '../Interfaces/Controllers/TodoController';

export class TodoController implements ITodoController {

  public listTodo(req: Request, res: Response) {

    PostgreSQL.execute(`
      SELECT 
      name,
      id,
      "isActive"
      FROM todo
      where "isActive" = true
    `)
      .then(todo => {

        return res.status(ResponseCodes.OK).send({
          success: true,
          list: todo
        });
      })
      .catch(err => {
        return res.status(ResponseCodes.OK).send({
          success: false,
          msg: err
        });
      })
  }

  public listTodoItems(req: Request, res: Response) {

    const { id } = req.params;

    PostgreSQL.execute(`SELECT * from "todoItem" where todo_id='${id}' and "isActive" = true`)
      .then(todoItems => {

        return res.status(ResponseCodes.OK).send({
          success: true,
          list: todoItems
        });
      })
      .catch(err => {
        return res.status(ResponseCodes.OK).send({
          success: false,
          msg: err
        });
      });
  }

  public deleteTodo(req: Request, res: Response) {

    const { id } = req.params;

    PostgreSQL.execute(`UPDATE todo SET "isActive" = false where id='${id}';`)
      .then(() => {
        return res.status(ResponseCodes.OK).send({
          success: true
        });
      })
      .catch(err => {
        return res.status(ResponseCodes.OK).send({
          success: false,
          msg: err
        });
      });
  }

  public recoverTodo(req: Request, res: Response) {

    const { id } = req.params;

    PostgreSQL.execute(`UPDATE todo SET "isActive" = true where id='${id}';`)
      .then(result => {
        console.log("result", result)
        return res.status(ResponseCodes.OK).send({
          success: true
        });
      })
      .catch(err => {
        return res.status(ResponseCodes.OK).send({
          success: false,
          msg: err
        });
      })
  }

  public addTodo(req: Request, res: Response) {

    const { name } = req.body;

    PostgreSQL.execute(`INSERT INTO todo(name, "isActive") VALUES ('${name}', true);`)
      .then(() => {
        return res.status(ResponseCodes.OK).send({
          success: true
        });
      })
      .catch(err => {
        return res.status(ResponseCodes.OK).send({
          success: false,
          msg: err
        });
      });
  }

  public addTodoItem(req: Request, res: Response) {

    const { name, id } = req.body;
    console.log("object", req.body)

    PostgreSQL.execute(`INSERT INTO "todoItem"(name, todo_id, "isActive") VALUES ('${name}', '${id}', true);`)
      .then(() => {
        return res.status(ResponseCodes.OK).send({
          success: true
        });
      })
      .catch(err => {
        return res.status(ResponseCodes.OK).send({
          success: false,
          msg: err
        });
      });
  }

  public deleteTodoItem(req: Request, res: Response) {

    const { id } = req.params;

    PostgreSQL.execute(`UPDATE "todoItem" SET "isActive" = false where id='${id}';`)
      .then(() => {
        return res.status(ResponseCodes.OK).send({
          success: true
        });
      })
      .catch(err => {
        return res.status(ResponseCodes.OK).send({
          success: false,
          msg: err
        });
      });
  }

  public updateTodo(req: Request, res: Response) {

    const { name, id } = req.body;

    PostgreSQL.execute(`UPDATE todo SET "name" = '${name}' where id='${id}';`)
      .then(() => {
        return res.status(ResponseCodes.OK).send({
          success: true
        });
      })
      .catch(err => {
        return res.status(ResponseCodes.OK).send({
          success: false,
          msg: err
        });
      });
  }

  public updateTodoItem(req: Request, res: Response) {

    const { name, description, deadline, id } = req.body;

    PostgreSQL.execute(`
    UPDATE todo 
    SET "name" = '${name}', "description" = '${description}', "deadline" = '${deadline}'
    where id='${id}';
    `)
      .then(() => {
        return res.status(ResponseCodes.OK).send({
          success: true
        });
      })
      .catch(err => {
        return res.status(ResponseCodes.OK).send({
          success: false,
          msg: err
        });
      });
  }
}