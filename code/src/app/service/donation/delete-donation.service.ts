import { DeleteDonationDTO } from '@/dtos/donation/delete-donation.dto';
import {
  IDeleteDonationRepository,
  IFindDoantionByIdRepository,
} from '@/interfaces/donation/donation-repository.interface';
import { IDeleteDonationService } from '@/interfaces/donation/donation-service.interface';
import { IFindEventByIdRepository } from '@/interfaces/event/event-repository.interface';
import { deleteDonationSchema } from '@/schemas/donation.schema';
import httpError from 'http-errors';
export class DeleteDonationService implements IDeleteDonationService {
  constructor(
    private findDonationByIdRepository: IFindDoantionByIdRepository,
    private findEventByIdRepository: IFindEventByIdRepository,
    private deleteDonationRepository: IDeleteDonationRepository
  ) {}

  async execute(params: DeleteDonationDTO): Promise<void> {
    const { userId, eventId, donationId } = deleteDonationSchema.parse(params);

    const event = await this.findEventByIdRepository.findById(eventId);

    if (!event) return;

    if (event.createdById !== userId) {
      throw httpError.Unauthorized(
        'you do not have permission to access this resource.'
      );
    }

    const donation = await this.findDonationByIdRepository.findById(donationId);

    if (!donation) {
      throw httpError.NotFound('donation not found');
    }

    await this.deleteDonationRepository.delete({
      userId,
      eventId,
      donationId,
    });
  }
}
