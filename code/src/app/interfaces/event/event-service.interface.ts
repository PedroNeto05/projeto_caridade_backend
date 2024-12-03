import { CreateEventDTO } from '@/dtos/event/create-event.dto';
import { FindEventByCreatedByDTO } from '@/dtos/event/find-event-by-created-by.dto';
import { FindEventByIdDTO } from '@/dtos/event/find-event-by-id.dto';
import { FindEventByNameDTO } from '@/dtos/event/find-event-by-name.dto';
import { UpdateEventDTO } from '@/dtos/event/update-event.dto';
import { Event } from '@prisma/client';

export interface ICreateEventService {
  execute(params: CreateEventDTO): Promise<void>;
}

export interface IUpdateEventService {
  execute(params: UpdateEventDTO): Promise<void>;
}

export interface IFindEventByIdService {
  execute(params: FindEventByIdDTO): Promise<Event | null>;
}

export interface IFindEventByNameService {
  execute(params: FindEventByNameDTO): Promise<Event[]>;
}

export interface IFindAllEventsService {
  execute(): Promise<Event[]>;
}

export interface IFindEventByCreatedByService {
  execute(params: FindEventByCreatedByDTO): Promise<Event[]>;
}
