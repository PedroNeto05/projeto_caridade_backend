import httpError from 'http-errors';
import { IUpdateEventService } from '@/interfaces/event/event-service.interface';
import { UpdateEventDTO } from '@/dtos/event/update-event.dto';
import { updateEventSchema } from '@/schemas/event.schema';
import {
  IFindEventByIdRepository,
  IUpdateEventRepository,
} from '@/interfaces/event/event-repository.interface';
import { Event } from '@prisma/client';

export class UpdateEventService implements IUpdateEventService {
  constructor(
    private findEventByIdRepository: IFindEventByIdRepository,
    private updateEventRepository: IUpdateEventRepository
  ) {}
  async execute(params: UpdateEventDTO): Promise<void> {
    const { userId, eventId, newName, newDate, newDescription, newLocation } =
      updateEventSchema.parse(params);

    const event = await this.findEventByIdRepository.findById(eventId);

    if (!event) {
      throw new httpError.NotFound('event not found');
    }

    if (userId !== event.createdById) {
      throw new httpError.Forbidden(
        'you do not have permission to access this resource.'
      );
    }

    const compareResult = this.compareData(
      event,
      newName,
      newDate,
      newDescription,
      newLocation
    );

    if (compareResult) {
      throw new httpError.Conflict(compareResult);
    }

    await this.updateEventRepository.update({
      userId,
      eventId,
      newName,
      newDate,
      newDescription,
      newLocation,
    });
  }

  compareData(
    event: Event,
    newName: string | undefined,
    newDate: Date | undefined,
    newDescription: string | undefined,
    newLocation: string | undefined
  ) {
    if (newName === event.name) {
      return 'The new name is the same as the current name.';
    }

    if (newDate === event.date) {
      return 'The new date is the same as the current date.';
    }

    if (newDescription === event.description) {
      return 'The new description is the same as the current description.';
    }

    if (newLocation === event.location) {
      return 'The new location is the same as the current location.';
    }
  }
}
