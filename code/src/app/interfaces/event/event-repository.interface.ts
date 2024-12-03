import { CreateEventDTO } from '@/dtos/event/create-event.dto';
import { FindEventByCreatedByDTO } from '@/dtos/event/find-event-by-created-by.dto';
import { FindEventByNameDTO } from '@/dtos/event/find-event-by-name.dto';
import { UpdateEventDTO } from '@/dtos/event/update-event.dto';
import { Event } from '@prisma/client';

export interface ICreateEventRepository {
  save(params: CreateEventDTO): Promise<void>;
}

export interface IFindEventByNameAndDateRepository {
  findByNameAndDate(name: string, date: Date): Promise<Event | null>;
}

export interface IFindEventByIdRepository {
  findById(eventId: number): Promise<Event | null>;
}

export interface IUpdateEventRepository {
  update(params: Partial<UpdateEventDTO>): Promise<void>;
}

export interface IFindEventByNameRepository {
  findByName(params: FindEventByNameDTO): Promise<Event[]>;
}

export interface IFindAllEventsRepository {
  findAll(): Promise<Event[]>;
}

export interface IFindEventByCreatedByRepository {
  findByCreatedBy(params: FindEventByCreatedByDTO): Promise<Event[]>;
}
