import { CreateDonationItemsDTO } from '@/dtos/donationItems/create-donation-items.dto';
import { IFindDoantionByIdRepository } from '@/interfaces/donation/donation-repository.interface';
import { ICreateDonationItemsRepository } from '@/interfaces/donationItems/donation-items-repository.interface';
import { ICreateDonationItemsService } from '@/interfaces/donationItems/donation-items-service.interface';
import { IFindEventByIdRepository } from '@/interfaces/event/event-repository.interface';
import { createDonationItemsSchema } from '@/schemas/donationItems.schema';
import httpError from 'http-errors';
export class CreateDonationItemsService implements ICreateDonationItemsService {
  constructor(
    private findDonationByIdRepository: IFindDoantionByIdRepository,
    private findEventByIdRepository: IFindEventByIdRepository,
    private createDonationItemsRepository: ICreateDonationItemsRepository
  ) {}

  async execute(params: CreateDonationItemsDTO): Promise<void> {
    const { userId, donationId, type, quantity, description } =
      createDonationItemsSchema.parse(params);

    const owner = await this.getOwner(donationId);

    if (!owner) return;

    if (owner !== userId) {
      throw httpError.Unauthorized(
        'you do not have permission to access this resource.'
      );
    }

    await this.createDonationItemsRepository.save({
      userId,
      donationId,
      type,
      quantity,
      description,
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

    return event.createdById;
  }
}
