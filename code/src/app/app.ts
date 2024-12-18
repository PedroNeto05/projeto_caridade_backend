import express, { Application } from 'express';
import { userRoutes } from './routes/userRoutes';
import { errorMiddleware } from './middlewares/error';
import { loginRoutes } from './routes/loginRoutes';
import { eventRoutes } from './routes/eventRoutes';
import { subscriptionRoutes } from './routes/subscriptionRoutes';
import { donationRoutes } from './routes/donationRoutes';
import { donationItemsRoutes } from './routes/donationItemsRoutes';

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
    this.app.use('/login', loginRoutes);
    this.app.use('/event', eventRoutes);
    this.app.use('/subscription', subscriptionRoutes);
    this.app.use('/donation', donationRoutes);
    this.app.use('/donationItems', donationItemsRoutes);
  }
}

const app = new App().app;

export { app };
