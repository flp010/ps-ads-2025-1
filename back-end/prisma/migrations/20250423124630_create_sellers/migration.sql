-- CreateTable
CREATE TABLE "Seller" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "birth_date" TIMESTAMP(3) NOT NULL,
    "indentity_document" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "is_manager" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Seller_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Seller_indentity_document_key" ON "Seller"("indentity_document");


-- CreateIndex
CREATE UNIQUE INDEX "Seller_email_key" ON "Seller"("email");
