-- CreateTable
CREATE TABLE "UserInfo" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "phone" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "UserInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DonorBook" (
    "id" SERIAL NOT NULL,
    "D_id" INTEGER NOT NULL,
    "ISBN" TEXT NOT NULL,
    "qty" INTEGER NOT NULL,
    "age" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "book_name" TEXT NOT NULL,
    "img_link" TEXT,

    CONSTRAINT "DonorBook_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClientBook" (
    "id" SERIAL NOT NULL,
    "C_id" INTEGER NOT NULL,
    "ISBN" TEXT NOT NULL,
    "qty" INTEGER NOT NULL,

    CONSTRAINT "ClientBook_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TransactionTable" (
    "id" SERIAL NOT NULL,
    "donorBookId" INTEGER NOT NULL,
    "clientBookId" INTEGER NOT NULL,
    "NGO_id" INTEGER NOT NULL,
    "qty" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',

    CONSTRAINT "TransactionTable_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserInfo_email_key" ON "UserInfo"("email");

-- AddForeignKey
ALTER TABLE "DonorBook" ADD CONSTRAINT "DonorBook_D_id_fkey" FOREIGN KEY ("D_id") REFERENCES "UserInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClientBook" ADD CONSTRAINT "ClientBook_C_id_fkey" FOREIGN KEY ("C_id") REFERENCES "UserInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransactionTable" ADD CONSTRAINT "TransactionTable_NGO_id_fkey" FOREIGN KEY ("NGO_id") REFERENCES "UserInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransactionTable" ADD CONSTRAINT "TransactionTable_donorBookId_fkey" FOREIGN KEY ("donorBookId") REFERENCES "DonorBook"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransactionTable" ADD CONSTRAINT "TransactionTable_clientBookId_fkey" FOREIGN KEY ("clientBookId") REFERENCES "ClientBook"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
