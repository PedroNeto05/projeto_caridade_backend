import express, { Application } from 'express';
import { userRoutes } from './routes/userRoutes';
import { errorMiddleware } from './middlewares/error';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.setup();
  }

  setup() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    this.routes();

    this.app.use(errorMiddleware);
  }

  private routes() {
    this.app.use('/user', userRoutes);
  }
}

const app = new App().app;

export { app };
