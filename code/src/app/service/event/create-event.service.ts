import httpError from 'http-errors';
import { CreateEventDTO } from '@/dtos/event/create-event.dto';
import {
  ICreateEventRepository,
  IFindEventByNameAndDate,
} from '@/interfaces/event/event-repository.interface';
import { ICreateEventService } from '@/interfaces/event/event-service.interface';
import { createEventSchema } from '@/schemas/event.schema';
export class CreateEventService implements ICreateEventService {
  constructor(
    private createEventRepository: ICreateEventRepository,
    private findEventByNameAndDateRepository: IFindEventByNameAndDate
  ) {}
  async execute(params: CreateEventDTO): Promise<void> {
    const { userId, name, location, date, description } =
      createEventSchema.parse(params);

    const event = await this.findEventByNameAndDateRepository.findByNameAndDate(
      name,
      date
    );

    if (event) {
      throw new httpError.Conflict('Event already exist');
    }

    await this.createEventRepository.save({
      userId,
      name,
      location,
      date,
      description,
    });
  }
}
