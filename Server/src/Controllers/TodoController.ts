import { Request, Response } from 'express';
import { ResponseCodes } from "../Helpers/Constant";
import { PostgreSQL } from '../Init/PostgreSQL';
import { ITodoController } from '../Interfaces/Controllers/TodoController';

const getTodos = async () => {
  return new Promise((resolve, reject) => {
    PostgreSQL.execute(`SELECT 
    t.id,
    t.name,
    t."isActive",
    ti.items
    FROM todo t
    FULL OUTER JOIN 
    (SELECT t2.id todoId, array_agg('{' || 'id:' || ti2.id || ', name:' || ti2.name || ', description:' || ti2.description || '}' ) items 
    from "todo" t2 
    inner join "todoItems" ti2 
    on t2.id = ti2.todo 
    group by t2.id) ti 
    on t.id = ti.todoId
    where t."isActive" = true;`)
      .then(todo => {
        resolve(todo)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export class TodoController implements ITodoController {

  public listTodo(req: Request, res: Response) {

    getTodos()
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

  public deleteTodo(req: Request, res: Response) {

    const { id } = req.params;

    PostgreSQL.execute(`UPDATE todo SET "isActive"=false where id='${id}';`)
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

    PostgreSQL.execute(`UPDATE todo SET "isActive"=true where id='${id}';`)
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
}