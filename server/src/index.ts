import express, { Request, Response } from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['akldjf'] }));
app.use(router);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

// DO NOT WRITE

// class Server {
//   app: express.Express = express();

//   constructor() {
//     this.app.use(bodyParser.urlencoded({ extended: true }));
//     this.app.use(cookieSession({ keys: ['akldjf'] }));
//     this.app.use(router);
//   }

//   start(): void {
//     this.app.listen(3000, () => {
//       console.log('Listening on port 3000');
//     });
//   }
// }

// new Server().start();
