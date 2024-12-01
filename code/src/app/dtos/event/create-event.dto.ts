export interface CreateEventDTO {
  userId: number;
  name: string;
  location: string;
  date: Date;
  description?: string;
}
