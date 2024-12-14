import { DeleteDonationItemsDTO } from '@/dtos/donationItems/delete-donation-items.dto';
import { IFindDoantionByIdRepository } from '@/interfaces/donation/donation-repository.interface';
import { IDeleteDonationItemsRepository } from '@/interfaces/donationItems/donation-items-repository.interface';
import { IDeleteDonationItemsService } from '@/interfaces/donationItems/donation-items-service.interface';
import { IFindEventByIdRepository } from '@/interfaces/event/event-repository.interface';
import { deleteDonationItemsSchema } from '@/schemas/donationItems.schema';
import httpError from 'http-errors';
export class DeleteDonationItemsService implements IDeleteDonationItemsService {
  constructor(
    private findDonationByIdRepository: IFindDoantionByIdRepository,
    private findEventByIdRepository: IFindEventByIdRepository,
    private deleteDonationItemsRepository: IDeleteDonationItemsRepository
  ) {}

  async execute(params: DeleteDonationItemsDTO): Promise<void> {
     const { userId, donationId } =
          deleteDonationItemsSchema.parse(params);

    const owner = await this.getOwner(donationId);

    if (!owner) return;

    if (owner !== userId) {
      throw httpError.Unauthorized(
        'you do not have permission to access this resource.'
      );
    }

    await this.deleteDonationItemsRepository.delete({
      userId,
      donationId,
    });
  }

  async getOwner(donationId: number): Promise<number | null> {
    const donation = await this.findDonationByIdRepository.findById(donationId);

    if (!donation) {
      throw httpError.NotFound('Donation not found');
    }

    const event = await this.findEventByIdRepository.findById(donation.eventId);

    if (!event) {
      throw httpError.NotFound('Donation not found');
    }

    return event.deletedById;
  }
}
