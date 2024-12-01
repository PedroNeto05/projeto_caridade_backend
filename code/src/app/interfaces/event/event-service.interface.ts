import { CreateEventDTO } from '@/dtos/event/create-event.dto';

export interface ICreateEventService {
  execute(params: CreateEventDTO): Promise<void>;
}
