import { CreateEventController } from '@/controller/event/create-evente.controller';
import { UpdateCreateEventController } from '@/controller/event/update-event.controller';
import { authLogin } from '@/middlewares/authLogin';
import { CreateEventRepository } from '@/repository/event/create-event.repository';
import { FindEventByIdRepository } from '@/repository/event/find-event-by-id.repository';
import { FindEventByNameAndDateRepository } from '@/repository/event/find-event-by-name-and-date.repository';
import { UpdateEventRepository } from '@/repository/event/update-event.repository';
import { CreateEventService } from '@/service/event/create-event.service';
import { UpdateEventService } from '@/service/event/update-event.service';
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

const updateEventRepository = new UpdateEventRepository();
const findEventByIdRepository = new FindEventByIdRepository();
const updateEventService = new UpdateEventService(
  findEventByIdRepository,
  updateEventRepository
);
const updateEventController = new UpdateCreateEventController(
  updateEventService
);
eventRoutes.put('/:id', authLogin, (req, res, next) => {
  updateEventController.handle(req, res, next);
});

export { eventRoutes };
