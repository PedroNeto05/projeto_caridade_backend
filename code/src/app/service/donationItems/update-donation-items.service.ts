import { UpdateDonationItemsDTO } from '@/dtos/donationItems/update-donation-items.dto';
import { IFindDoantionByIdRepository } from '@/interfaces/donation/donation-repository.interface';
import { IFindDonationItemByIdRepository } from '@/interfaces/donationItems/donation-items-repository.interface';
import { IUpdateDonationItemsRepository } from '@/interfaces/donationItems/donation-items-repository.interface';
import { IUpdateDonationItemsService } from '@/interfaces/donationItems/donation-items-service.interface';
import { IFindEventByIdRepository } from '@/interfaces/event/event-repository.interface';
import { updateDonationItemsSchema } from '@/schemas/donationItems.schema';
import httpError from 'http-errors';
export class UpdateDonationItemsService implements IUpdateDonationItemsService {
  constructor(
    private findDonationByIdRepository: IFindDoantionByIdRepository,
    private findDonationItemByIdRepository: IFindDonationItemByIdRepository,
    private findEventByIdRepository: IFindEventByIdRepository,
    private updateDonationItemsRepository: IUpdateDonationItemsRepository
  ) {}

  async execute(params: UpdateDonationItemsDTO): Promise<void> {
    const { userId, donationItemId, newType, newQuantity, newDescription } =
      updateDonationItemsSchema.parse(params);

    const owner = await this.getOwner(donationItemId);

    if (!owner) return;

    if (owner !== userId) {
      throw httpError.Unauthorized(
        'you do not have permission to access this resource.'
      );
    }

    await this.updateDonationItemsRepository.update({
      userId,
      donationItemId,
      newType,
      newQuantity,
      newDescription,
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
      throw httpError.NotFound('Donation item not found');
    }

    const event = await this.findEventByIdRepository.findById(donation.eventId);

    if (!event) {
      throw httpError.NotFound('Donation item not found');
    }

    return event.createdById;
  }
}
