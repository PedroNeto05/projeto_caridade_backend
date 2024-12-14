export interface CreateDonationItemsDTO {
  userId: number;
  donationId: number;
  type: string;
  description?: string;
  quantity: number;
}
