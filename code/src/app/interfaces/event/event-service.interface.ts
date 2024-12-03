import { CreateEventDTO } from '@/dtos/event/create-event.dto';
import { FindEventByIdDTO } from '@/dtos/event/find-event-by-id.dto';
import { UpdateEventDTO } from '@/dtos/event/update-event.dto';
import { Event } from '@prisma/client';

export interface ICreateEventService {
  execute(params: CreateEventDTO): Promise<void>;
}

export interface IUpdateEventService {
  execute(params: UpdateEventDTO): Promise<void>;
}

export interface IFindEventByIdSerivce {
  execute(params: FindEventByIdDTO): Promise<Event | null>;
}
