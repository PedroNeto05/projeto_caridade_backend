import { CreateEventDTO } from '@/dtos/event/create-event.dto';
import { Event } from '@prisma/client';

export interface ICreateEventRepository {
  save(params: CreateEventDTO): Promise<void>;
}

export interface IFindEventByNameAndDateRepository {
  findByNameAndDate(name: string, date: Date): Promise<Event | null>;
}

export interface IUpdateEvent
