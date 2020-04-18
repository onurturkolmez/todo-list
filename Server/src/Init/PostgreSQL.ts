import { Sequelize } from 'sequelize-typescript';
import { Client } from 'pg';
import { Todo } from '../Models/Todo';

export class PostgreSQL {

  private static db: Client;

  public static async initialize(): Promise<void> {

    this.db = new Client({
      database: 'huawei',
      host: 'localhost',
      password: '123456',
      user: 'postgres',
      port: 5432,
      keepAlive: true
    })

    return new Promise(resolve => {
      this.db.connect()
        .then(() => {
          console.log("Succesfully connected the database");
          resolve();
        })
        .catch(err => {
          console.error(`Something went wrong ${err}`);
          process.exit();
        })
    });
  }

  public static async execute(queryString: string): Promise<void> {

    return new Promise((resolve, reject) => {
      this.db.query(queryString)
        .then((data: any) => {
          resolve(data.rows);
        })
        .catch(err => {
          reject({ error: true, msg: err })
        })
    });
  }
}