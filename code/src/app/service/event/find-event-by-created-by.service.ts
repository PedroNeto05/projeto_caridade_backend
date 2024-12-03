import { FindEventByCreatedByDTO } from '@/dtos/event/find-event-by-created-by.dto';
import { IFindEventByCreatedByRepository } from '@/interfaces/event/event-repository.interface';
import { IFindEventByCreatedByService } from '@/interfaces/event/event-service.interface';
import { Event } from '@prisma/client';

export class FindEventByCreatedByService
  implements IFindEventByCreatedByService
{
  constructor(
    private findEventByCreatedByRepository: IFindEventByCreatedByRepository
  ) {}
  async execute(params: FindEventByCreatedByDTO): Promise<Event[]> {
    const events = await this.findEventByCreatedByRepository.findByCreatedBy({
      createdBy: params.createdBy,
    });

    return events;
  }
}
