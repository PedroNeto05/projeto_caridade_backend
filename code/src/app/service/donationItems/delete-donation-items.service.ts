import { DeleteDonationItemsDTO } from '@/dtos/donationItems/delete-donation-items.dto';
import { IFindDoantionByIdRepository } from '@/interfaces/donation/donation-repository.interface';
import {
  IDeleteDonationItemsRepository,
  IFindDonationItemByIdRepository,
} from '@/interfaces/donationItems/donation-items-repository.interface';
import { IDeleteDonationItemsService } from '@/interfaces/donationItems/donation-items-service.interface';
import { IFindEventByIdRepository } from '@/interfaces/event/event-repository.interface';
import { deleteDonationItemsSchema } from '@/schemas/donationItems.schema';
import httpError from 'http-errors';
export class DeleteDonationItemsService implements IDeleteDonationItemsService {
  constructor(
    private findDonationByIdRepository: IFindDoantionByIdRepository,
    private findEventByIdRepository: IFindEventByIdRepository,
    private deleteDonationItemsRepository: IDeleteDonationItemsRepository,
    private findDonationItemByIdRepository: IFindDonationItemByIdRepository
  ) {}

  async execute(params: DeleteDonationItemsDTO): Promise<void> {
    const { userId, donationItemId } = deleteDonationItemsSchema.parse(params);

    const owner = await this.getOwner(donationItemId);

    if (!owner) return;

    if (owner !== userId) {
      throw httpError.Unauthorized(
        'you do not have permission to access this resource.'
      );
    }

    await this.deleteDonationItemsRepository.delete({
      userId,
      donationItemId,
    });
  }

  async getOwner(donationItemId: number): Promise<number | null> {
    const item =
      await this.findDonationItemByIdRepository.findById(donationItemId);

    if (!item) {
      throw httpError.NotFound('Donation item not found');
    }
    const donation = await this.findDonationByIdRepository.findById(
      item.donationId
    );

    if (!donation) {
      throw httpError.NotFound('Donation not found');
    }

    const event = await this.findEventByIdRepository.findById(donation.eventId);

    if (!event) {
      throw httpError.NotFound('Donation not found');
    }

    return event.createdById;
  }
}
