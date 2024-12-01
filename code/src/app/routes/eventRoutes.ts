import { CreateEventController } from '@/controller/event/create-evente.controller';
import { authLogin } from '@/middlewares/authLogin';
import { CreateEventRepository } from '@/repository/event/create-event.repository';
import { FindEventByNameAndDateRepository } from '@/repository/event/find-event-by-name-and-date.repository';
import { CreateEventService } from '@/service/event/create-event.service';
import { Router } from 'express';

const eventRoutes = Router();

const createEventRepository = new CreateEventRepository();
const findEventByNameAndDate = new FindEventByNameAndDateRepository();
const createEventService = new CreateEventService(
  createEventRepository,
  findEventByNameAndDate
);
const createEventController = new CreateEventController(createEventService);
eventRoutes.post('/', authLogin, (req, res, next) => {
  createEventController.handle(req, res, next);
});

export { eventRoutes };
