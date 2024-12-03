import { CreateEventController } from '@/controller/event/create-event.controller';
import { DeleteEventController } from '@/controller/event/delete-event.controller';
import { FindEventByCreatedByController } from '@/controller/event/find-by-createdBy.controller';
import { FindEventByIdController } from '@/controller/event/find-event-by-id.controller';
import { FindEventByNameController } from '@/controller/event/find-event-by-name.controller';
import { UpdateCreateEventController } from '@/controller/event/update-event.controller';
import { authLogin } from '@/middlewares/authLogin';
import { CreateEventRepository } from '@/repository/event/create-event.repository';
import { DeleteEventRepository } from '@/repository/event/delete-event.repository';
import { FindEventByCreatedByRepository } from '@/repository/event/find-event-by-created-by.repository';
import { FindEventByIdRepository } from '@/repository/event/find-event-by-id.repository';
import { FindEventByNameAndDateRepository } from '@/repository/event/find-event-by-name-and-date.repository';
import { FindEventByNameRepository } from '@/repository/event/find-event-by-name.repository';
import { UpdateEventRepository } from '@/repository/event/update-event.repository';
import { FindUserByIdRepository } from '@/repository/user/find-user-by-id.repository';
import { CreateEventService } from '@/service/event/create-event.service';
import { DeleteEventService } from '@/service/event/delete-event.serivce';
import { FindEventByCreatedByService } from '@/service/event/find-event-by-created-by.service';
import { FindEventByIdService } from '@/service/event/find-event-by-id.service';
import { FindEventByNameService } from '@/service/event/find-event-by-name.service';
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

const findEventByIdService = new FindEventByIdService(findEventByIdRepository);
const findEventByIdController = new FindEventByIdController(
  findEventByIdService
);
eventRoutes.get('/:id', (req, res, next) => {
  findEventByIdController.handle(req, res, next);
});

const findeventbyNameRepository = new FindEventByNameRepository();
const findEventByNameService = new FindEventByNameService(
  findeventbyNameRepository
);
const findEventByNameController = new FindEventByNameController(
  findEventByNameService
);
eventRoutes.get('/name/:name', (req, res, next) => {
  findEventByNameController.handle(req, res, next);
});

const findEventByCreateByRepository = new FindEventByCreatedByRepository();

const findEventByCreateByService = new FindEventByCreatedByService(
  findEventByCreateByRepository
);
const findEventByCreateByController = new FindEventByCreatedByController(
  findEventByCreateByService
);
eventRoutes.get('/user/:createdById', (req, res, next) => {
  findEventByCreateByController.handle(req, res, next);
});
const findUserByIdRepository = new FindUserByIdRepository();
const deleteEventRepository = new DeleteEventRepository();
const deleteEventService = new DeleteEventService(
  findEventByIdRepository,
  findUserByIdRepository,
  deleteEventRepository
);
const deleteEventController = new DeleteEventController(deleteEventService);
eventRoutes.delete('/:id', (req, res, next) => {
  deleteEventController.handle(req, res, next);
});

export { eventRoutes };
