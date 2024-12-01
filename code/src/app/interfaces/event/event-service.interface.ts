import { CreateEventDTO } from '@/dtos/event/create-event.dto';
import { UpdateEventDTO } from '@/dtos/event/update-event.dto';

export interface ICreateEventService {
  execute(params: CreateEventDTO): Promise<void>;
}

export interface IUpdateEventService {
  execute(params: UpdateEventDTO): Promise<void>;
}
