import { IServer } from "Interfaces/Init/server";
import * as express from 'express';
import { Routes } from "../Routes";
import { json, urlencoded } from "body-parser";
import * as cors from 'cors';

export class Server implements IServer {

  private app: express.Application;
  private routes: Routes;

  constructor() {
    this.routes = new Routes();
    this.app = express();
    this.config();
    this.routes.routes(this.app);
  }

  private config() {
    this.app.disable('etag');
    this.app.use(cors());
    // this.app.use(express.static('public'));
    this.app.use(json({ limit: '50mb' }));
    this.app.use(json({ type: 'application/vnd.api+json' }));
    this.app.use(urlencoded({ extended: true }));
    this.app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      res.setHeader('Access-Control-Allow-Credentials', 'true');
      next();
    });

  }

  public async start(): Promise<void> {
    return new Promise(resolve => {
      this.app.listen(5000, () => {
        resolve();
      })
    })
  }
}