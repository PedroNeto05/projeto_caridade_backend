import { CreateDonationController } from '@/controller/donation/create-donation.controller';
import { CreateDonationRepository } from '@/repository/donation/create-donation.repository';
import { CreateDonationService } from '@/service/donation/create-donation.service';
import { FindSubscriptionByUserIdAndEventIdRepository } from '@/repository/subscription/find-subscription-by-userId-and-eventId.repository';
import { Router } from 'express';
import { FindEventByIdRepository } from '@/repository/event/find-event-by-id.repository';
import { FindUserDonationsController } from '@/controller/donation/find-user-donations.controller';
import { FindUserDonationsRepository } from '@/repository/donation/find-user-donations.repository';
import { FindUserDonationsService } from '@/service/donation/find-user-donations.service';
import { FindEventDonationsRepository } from '@/repository/donation/find-event-donations.repository';
import { FindEventDonationsService } from '@/service/donation/find-event-donations.service';
import { FindEventDonationsController } from '@/controller/donation/find-event-donations.controller';
import { DeleteDonationController } from '@/controller/donation/delete-donation.controller';
import { DeleteDonationService } from '@/service/donation/delete-donation.service';
import { DeleteDonationRepository } from '@/repository/donation/delete-donation.repository';
import { FindDonationByIdRepository } from '@/repository/donation/find-donation-by-id.repository';
import { authLogin } from '@/middlewares/authLogin';

const donationRoutes = Router();

const findEventByIdRepository = new FindEventByIdRepository();
const findSubscriptionByUserIdAndEventId =
  new FindSubscriptionByUserIdAndEventIdRepository();
const createDonationRepository = new CreateDonationRepository();
const createDonationService = new CreateDonationService(
  findSubscriptionByUserIdAndEventId,
  findEventByIdRepository,
  createDonationRepository
);
const createDonationController = new CreateDonationController(
  createDonationService
);
donationRoutes.post('/:eventId/:subscriberId ', authLogin, (req, res, next) => {
  createDonationController.handle(req, res, next);
});

const findUserDonationsRepository = new FindUserDonationsRepository();
const findUserDonationsService = new FindUserDonationsService(
  findUserDonationsRepository
);
const findUserDonationsController = new FindUserDonationsController(
  findUserDonationsService
);
donationRoutes.get('/user/:userId', (req, res, next) => {
  findUserDonationsController.handle(req, res, next);
});

const findEventDonationsRepository = new FindEventDonationsRepository();
const findEventDonationsService = new FindEventDonationsService(
  findEventDonationsRepository
);
const findEventDonationsController = new FindEventDonationsController(
  findEventDonationsService
);
donationRoutes.get('/events/:eventId', (req, res, next) => {
  findEventDonationsController.handle(req, res, next);
});

const findDonationByIdRepository = new FindDonationByIdRepository();
const deleteDonationRepository = new DeleteDonationRepository();
const deleteDonationService = new DeleteDonationService(
  findDonationByIdRepository,
  findEventByIdRepository,
  deleteDonationRepository
);
const deleteDonationController = new DeleteDonationController(
  deleteDonationService
);

donationRoutes.delete('/:eventId/:donationId', authLogin, (req, res, next) => {
  deleteDonationController.handle(req, res, next);
});

export { donationRoutes };
