export interface UpdateEventDTO {
  userId: number;
  eventId: number;
  newDate: Date;
  newName: string;
  newDescription: string;
  newLocation: string;
}
