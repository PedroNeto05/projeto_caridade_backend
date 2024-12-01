import { CreateEventDTO } from '@/dtos/event/create-event.dto';
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
