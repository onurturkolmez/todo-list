import { ResponseCodes } from "../Helpers/Constant";
import { Request, Response, Application } from 'express';
import { ITodoController } from "Interfaces/Controllers/TodoController";
import { TodoController } from "../Controllers/TodoController";
import { UserController } from "../Controllers/UserController";
import { IUserController } from "../Interfaces/Controllers/UserController";

export class Routes {

  private todoController: ITodoController;
  private userController: IUserController;

  constructor() {
    this.todoController = new TodoController();
    this.userController = new UserController();
  }

  public routes(app: Application) {
    app.all('/', (req: Request, res: Response) =>
      res.status(ResponseCodes.OK).send('TodoList Server is Working')
    );

    app.get(`/todo/list`, this.todoController.listTodo);
    app.get(`/todo/delete/:id`, this.todoController.deleteTodo);
    app.post(`/todo/add`, this.todoController.addTodo);
    app.get(`/todo/recover/:id`, this.todoController.recoverTodo);
    app.post(`/user/login`, this.userController.login);
  }
}