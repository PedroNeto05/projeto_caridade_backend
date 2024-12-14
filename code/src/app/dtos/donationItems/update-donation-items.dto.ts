export interface UpdateDonationItemsDTO {
    userId: number;
    donationItemId: number;
    newType?: string;
    newDescription?: string;
    newQuantity?: number;
  }
  