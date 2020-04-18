import { IServer } from 'Interfaces/Init/server';
import { Server, PostgreSQL } from './Init';

export class App {
    static async initialize() {

        await PostgreSQL.initialize();
        const server: IServer = new Server();
        await server.start();
    }
}

App.initialize()
    .then(() => console.log('Started'))
    .catch(err => console.log(`Something went wrong ${err}`));