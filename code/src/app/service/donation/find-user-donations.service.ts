import { FindUserDonationsDTO } from '@/dtos/donation/find-user-donations.dto';
import { IFindUserDonationsRepository } from '@/interfaces/donation/donation-repository.interface';
import { IFindUserDonationsService } from '@/interfaces/donation/donation-service.interface';
import { findUserDonationsSchema } from '@/schemas/donation.schema';
import { Donation } from '@prisma/client';
export class FindUserDonationsService implements IFindUserDonationsService {
  constructor(
    private findUserDonationsRepository: IFindUserDonationsRepository
  ) {}

  async execute(params: FindUserDonationsDTO): Promise<Donation[]> {
    const { userId } = findUserDonationsSchema.parse(params);

    const donations = await this.findUserDonationsRepository.findById({
      userId,
    });

    return donations;
  }
}
