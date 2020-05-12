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
    app.get(`/todoItem/list/:id`, this.todoController.listTodoItems);
    app.post(`/todoItem/add`, this.todoController.addTodoItem);
    app.get(`/todo/delete/:id`, this.todoController.deleteTodo);
    app.get(`/todoItem/delete/:id`, this.todoController.deleteTodoItem);
    app.post(`/todo/add`, this.todoController.addTodo);
    app.get(`/todo/recover/:id`, this.todoController.recoverTodo);
    app.post(`/todo/update`, this.todoController.updateTodo);
    app.post(`/todoItem/update`, this.todoController.updateTodoItem);
    app.post(`/user/login`, this.userController.login);
  }
}