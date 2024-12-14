import { CreateSubscriptionController } from '@/controller/subscription/create-subscription.controller';
import { FindUserSubscriptionByUserIdController } from '@/controller/subscription/find-user-subscription-by-user-id.controller';
import { authLogin } from '@/middlewares/authLogin';
import { FindEventByIdRepository } from '@/repository/event/find-event-by-id.repository';
import { CreateSubscriptionRepository } from '@/repository/subscription/create-subscription.repository';
import { FindSubscriptionByUserIdAndEventIdRepository } from '@/repository/subscription/find-subscription-by-userId-and-eventId.repository';
import { FindUserSubscriptionByUserIdRepository } from '@/repository/subscription/find-user-subscription-by-userId.repository';
import { CreateSubscriptionService } from '@/service/subscription/create-subscription.service';
import { FindUserSubscriptionByUserIdService } from '@/service/subscription/find-user-subscription-by-userId.service';
import { Router } from 'express';

const subscriptionRoutes = Router();

const findUserSubscriptionByUserIdRepository =
  new FindUserSubscriptionByUserIdRepository();
const findUserSubscriptionByUserIdService =
  new FindUserSubscriptionByUserIdService(
    findUserSubscriptionByUserIdRepository
  );
const findUserSubscriptionByUserIdController =
  new FindUserSubscriptionByUserIdController(
    findUserSubscriptionByUserIdService
  );

subscriptionRoutes.get('/:userId', (req, res, next) => {
  findUserSubscriptionByUserIdController.handle(req, res, next);
});

const findSubscriptionByUserIdAndEventIdRepository =
  new FindSubscriptionByUserIdAndEventIdRepository();
const findEventById = new FindEventByIdRepository();
const createSubscriptionRepository = new CreateSubscriptionRepository();
const createSubscriptionService = new CreateSubscriptionService(
  findSubscriptionByUserIdAndEventIdRepository,
  createSubscriptionRepository,
  findEventById
);
const createSubscriptionController = new CreateSubscriptionController(
  createSubscriptionService
);

subscriptionRoutes.post('/:eventId', authLogin, (req, res, next) => {
  createSubscriptionController.handle(req, res, next);
});

export { subscriptionRoutes };
