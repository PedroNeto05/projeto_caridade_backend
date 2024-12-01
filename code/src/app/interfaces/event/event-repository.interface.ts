import { CreateEventDTO } from '@/dtos/event/create-event.dto';
import { Event } from '@prisma/client';

export interface ICreateEventRepository {
  save(params: CreateEventDTO): Promise<void>;
}

export interface IFindEventByNameAndDate {
  findByNameAndDate(name: string, date: Date): Promise<Event | null>;
}
