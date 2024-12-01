-- CreateTable
CREATE TABLE "DonationItem" (
    "id" SERIAL NOT NULL,
    "donationId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DonationItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "DonationItem_donationId_idx" ON "DonationItem"("donationId");
