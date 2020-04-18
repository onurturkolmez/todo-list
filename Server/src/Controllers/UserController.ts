import { Request, Response } from 'express';
import { ResponseCodes } from "../Helpers/Constant";
import { Client } from "pg";
import { PostgreSQL } from '../Init/PostgreSQL';
import { IUserController } from 'Interfaces/Controllers/UserController';

export class UserController implements IUserController {
  public login(req: Request, res: Response) {

    const { email, password } = req.body;

    PostgreSQL.execute(`SELECT * FROM users where email='${email}' AND password='${password}'`)
      .then(user => {
        console.log("todo", user)
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
}