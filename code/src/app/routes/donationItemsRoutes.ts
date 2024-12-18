import { CreateDonationItemsController } from '@/controller/donationItems/create-donation-items.controller';
import { DeleteDonationItemsController } from '@/controller/donationItems/delete-donation-items.controller';
import { UpdateDonationItemsController } from '@/controller/donationItems/update-donation-items.controller';
import { authLogin } from '@/middlewares/authLogin';
import { FindDonationByIdRepository } from '@/repository/donation/find-donation-by-id.repository';
import { CreateDonationItemsRepository } from '@/repository/donationItens/create-donation-itens.repository';
import { DeleteDonationItemsRepository } from '@/repository/donationItens/delete-donation-items.repository';
import { FindDonationItemByIdRepository } from '@/repository/donationItens/find-donation-items-by-id.repository';
import { UpdateDonationItemsRepository } from '@/repository/donationItens/update-donation-items.repository';
import { FindEventByIdRepository } from '@/repository/event/find-event-by-id.repository';
import { CreateDonationItemsService } from '@/service/donationItems/create-donation-items.service';
import { DeleteDonationItemsService } from '@/service/donationItems/delete-donation-items.service';
import { UpdateDonationItemsService } from '@/service/donationItems/update-donation-items.service';
import { Router } from 'express';

const donationItemsRoutes = Router();

const findEventByIdRepository = new FindEventByIdRepository();
const findDonationByIdRepository = new FindDonationByIdRepository();
const createDonationItemsRepository = new CreateDonationItemsRepository();
const createDonationItemsService = new CreateDonationItemsService(
  findDonationByIdRepository,
  findEventByIdRepository,
  createDonationItemsRepository
);
const createDonationItemsController = new CreateDonationItemsController(
  createDonationItemsService
);

donationItemsRoutes.post('/:donationId', authLogin, (req, res, next) => {
  createDonationItemsController.handle(req, res, next);
});

const updateDonationItemsRepository = new UpdateDonationItemsRepository();
const findDonationItemByIdRepository = new FindDonationItemByIdRepository();
const updateDonationItemsService = new UpdateDonationItemsService(
  findDonationByIdRepository,
  findDonationItemByIdRepository,
  findEventByIdRepository,
  updateDonationItemsRepository
);
const updateDonationItemsController = new UpdateDonationItemsController(
  updateDonationItemsService
);

donationItemsRoutes.put('/:donationItemId ', authLogin, (req, res, next) => {
  updateDonationItemsController.handle(req, res, next);
});

const deleteDonationItemsRepository = new DeleteDonationItemsRepository();
const deleteDonationItemsService = new DeleteDonationItemsService(
  findDonationByIdRepository,
  findEventByIdRepository,
  deleteDonationItemsRepository
);
const deleteDonationItemsController = new DeleteDonationItemsController(
  deleteDonationItemsService
);

donationItemsRoutes.delete(
  '/donation/:donationId/donationItems/:donationItemId ',
  authLogin,
  (req, res, next) => {
    deleteDonationItemsController.handle(req, res, next);
  }
);

export { donationItemsRoutes };
