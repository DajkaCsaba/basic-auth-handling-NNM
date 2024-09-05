-- CreateEnum
CREATE TYPE "Type" AS ENUM ('ADMIN', 'WORKER', 'PARTNER');

-- CreateEnum
CREATE TYPE "AxisType" AS ENUM ('UNIAXIAL', 'BIAXIAL');

-- CreateEnum
CREATE TYPE "WheelType" AS ENUM ('UNDER', 'OUTER');

-- CreateEnum
CREATE TYPE "PartnerStatus" AS ENUM ('ACTIVE', 'BANNED', 'CAUTION_EXCEEDED');

-- CreateEnum
CREATE TYPE "CustomerStatus" AS ENUM ('ACTIVE', 'BANNED');

-- CreateEnum
CREATE TYPE "TrailerTypeStatus" AS ENUM ('ACTIVE', 'INACTIVE');

-- CreateEnum
CREATE TYPE "TrailerAccessoryStatus" AS ENUM ('ACTIVE', 'INACTIVE');

-- CreateEnum
CREATE TYPE "TrailerStatus" AS ENUM ('IDLE', 'AT_PARTNER', 'RENTED', 'ORDERED', 'PREPARE', 'DELIVERED', 'SOLD', 'CRUSHED', 'INACTIVE');

-- CreateEnum
CREATE TYPE "InsuranceStatus" AS ENUM ('ACTIVE', 'EXPIRE_UNDER_MONTH', 'EXPIRE_UNDER_WEEK', 'EXPIRED', 'INACTIVE');

-- CreateEnum
CREATE TYPE "TrafficLicenseStatus" AS ENUM ('ACTIVE', 'EXPIRE_UNDER_MONTH', 'EXPIRE_UNDER_WEEK', 'EXPIRED', 'INACTIVE');

-- CreateEnum
CREATE TYPE "PermissionType" AS ENUM ('BASIC', 'TRAILER', 'TRAILER_TYPE', 'WORKER', 'PARTNER', 'INSURANCE', 'TRAFFIC_LICENSE', 'TRAILER_ACCESSORY', 'SITE_ADDRESS', 'HEADQUARTER_ADDRESS');

-- CreateEnum
CREATE TYPE "PermissionToken" AS ENUM ('HANDLE_PERMISSIONS', 'LOGIN', 'READ', 'LIST', 'CREATE', 'MODIFY', 'REMOVE', 'ADD_TO_PARTNER', 'REVOKE_FROM_PARTNER');

-- CreateEnum
CREATE TYPE "ApplicableOption" AS ENUM ('RENT', 'SALE', 'PERMANENT_RENT');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "type" "Type" NOT NULL,
    "permission_preset_id" TEXT,
    "token" TEXT,
    "reset_password_token" TEXT,
    "phone" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "partner_datas" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "birthday" TEXT NOT NULL,
    "tax_number" TEXT NOT NULL,
    "status" "PartnerStatus" NOT NULL DEFAULT 'ACTIVE',
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "partner_datas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customers" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "id_card_number" TEXT NOT NULL,
    "id_card_expire_at" TEXT NOT NULL,
    "drive_license_number" TEXT NOT NULL,
    "driver_license_expire_at" TEXT NOT NULL,
    "company_name" TEXT,
    "tax_number" TEXT,
    "status" "CustomerStatus" NOT NULL DEFAULT 'ACTIVE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trailer_accessories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "is_required" BOOLEAN NOT NULL,
    "status" "TrailerAccessoryStatus" NOT NULL DEFAULT 'ACTIVE',
    "trailerTypeId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "trailer_accessories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trailer_types" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "axis_type" "AxisType" NOT NULL,
    "width" INTEGER NOT NULL,
    "length" INTEGER NOT NULL,
    "with_brake" BOOLEAN NOT NULL,
    "load_capacity" INTEGER NOT NULL,
    "wheel_type" "WheelType" NOT NULL,
    "description" TEXT,
    "basePrice" INTEGER NOT NULL,
    "caution" INTEGER NOT NULL,
    "status" "TrailerTypeStatus" NOT NULL DEFAULT 'ACTIVE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "trailer_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trailers" (
    "id" TEXT NOT NULL,
    "type_id" TEXT NOT NULL,
    "chassis_number" TEXT,
    "license_plate_number" TEXT,
    "registry_number" TEXT NOT NULL,
    "partnerId" TEXT,
    "daily_rental_price" INTEGER,
    "daily_discounted_rental_price" INTEGER,
    "status" "TrailerStatus" NOT NULL DEFAULT 'IDLE',
    "applicable" "ApplicableOption" NOT NULL DEFAULT 'RENT',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "trailers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "traffic_license" (
    "id" TEXT NOT NULL,
    "identifier" TEXT NOT NULL,
    "expiration" TEXT NOT NULL,
    "status" "TrafficLicenseStatus" NOT NULL DEFAULT 'ACTIVE',
    "trailer_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "traffic_license_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "insurances" (
    "id" TEXT NOT NULL,
    "identifier" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "expiration" TEXT NOT NULL,
    "trailer_id" TEXT NOT NULL,
    "status" "InsuranceStatus" NOT NULL DEFAULT 'ACTIVE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "insurances_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "site_address" (
    "id" TEXT NOT NULL,
    "addressId" TEXT NOT NULL,
    "partnerId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "site_address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "headquarter_address" (
    "id" TEXT NOT NULL,
    "addressId" TEXT NOT NULL,
    "partnerId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "headquarter_address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customer_address" (
    "id" TEXT NOT NULL,
    "addressId" TEXT NOT NULL,
    "customer_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "customer_address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "address" (
    "id" TEXT NOT NULL,
    "zip_code" TEXT NOT NULL,
    "settlement" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "permission_preset" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "permission_preset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "permission" (
    "id" TEXT NOT NULL,
    "translated" TEXT NOT NULL,
    "type" "PermissionType" NOT NULL,
    "token" "PermissionToken" NOT NULL,
    "defaults" "PermissionToken"[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "permission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CustomerToPartnerData" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TrailerToTrailerAccessory" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PermissionToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PermissionToPermissionPreset" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "partner_datas_name_key" ON "partner_datas"("name");

-- CreateIndex
CREATE UNIQUE INDEX "partner_datas_user_id_key" ON "partner_datas"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "customers_email_key" ON "customers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "customers_phone_key" ON "customers"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "customers_id_card_number_key" ON "customers"("id_card_number");

-- CreateIndex
CREATE UNIQUE INDEX "customers_drive_license_number_key" ON "customers"("drive_license_number");

-- CreateIndex
CREATE UNIQUE INDEX "trailers_license_plate_number_key" ON "trailers"("license_plate_number");

-- CreateIndex
CREATE UNIQUE INDEX "traffic_license_trailer_id_key" ON "traffic_license"("trailer_id");

-- CreateIndex
CREATE UNIQUE INDEX "insurances_trailer_id_key" ON "insurances"("trailer_id");

-- CreateIndex
CREATE UNIQUE INDEX "site_address_partnerId_key" ON "site_address"("partnerId");

-- CreateIndex
CREATE UNIQUE INDEX "headquarter_address_partnerId_key" ON "headquarter_address"("partnerId");

-- CreateIndex
CREATE UNIQUE INDEX "customer_address_customer_id_key" ON "customer_address"("customer_id");

-- CreateIndex
CREATE UNIQUE INDEX "address_zip_code_settlement_address_key" ON "address"("zip_code", "settlement", "address");

-- CreateIndex
CREATE UNIQUE INDEX "_CustomerToPartnerData_AB_unique" ON "_CustomerToPartnerData"("A", "B");

-- CreateIndex
CREATE INDEX "_CustomerToPartnerData_B_index" ON "_CustomerToPartnerData"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TrailerToTrailerAccessory_AB_unique" ON "_TrailerToTrailerAccessory"("A", "B");

-- CreateIndex
CREATE INDEX "_TrailerToTrailerAccessory_B_index" ON "_TrailerToTrailerAccessory"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PermissionToUser_AB_unique" ON "_PermissionToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_PermissionToUser_B_index" ON "_PermissionToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PermissionToPermissionPreset_AB_unique" ON "_PermissionToPermissionPreset"("A", "B");

-- CreateIndex
CREATE INDEX "_PermissionToPermissionPreset_B_index" ON "_PermissionToPermissionPreset"("B");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_permission_preset_id_fkey" FOREIGN KEY ("permission_preset_id") REFERENCES "permission_preset"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "partner_datas" ADD CONSTRAINT "partner_datas_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trailer_accessories" ADD CONSTRAINT "trailer_accessories_trailerTypeId_fkey" FOREIGN KEY ("trailerTypeId") REFERENCES "trailer_types"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trailers" ADD CONSTRAINT "trailers_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "trailer_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trailers" ADD CONSTRAINT "trailers_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "partner_datas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "traffic_license" ADD CONSTRAINT "traffic_license_trailer_id_fkey" FOREIGN KEY ("trailer_id") REFERENCES "trailers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "insurances" ADD CONSTRAINT "insurances_trailer_id_fkey" FOREIGN KEY ("trailer_id") REFERENCES "trailers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "site_address" ADD CONSTRAINT "site_address_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "site_address" ADD CONSTRAINT "site_address_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "partner_datas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "headquarter_address" ADD CONSTRAINT "headquarter_address_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "headquarter_address" ADD CONSTRAINT "headquarter_address_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "partner_datas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_address" ADD CONSTRAINT "customer_address_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_address" ADD CONSTRAINT "customer_address_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CustomerToPartnerData" ADD CONSTRAINT "_CustomerToPartnerData_A_fkey" FOREIGN KEY ("A") REFERENCES "customers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CustomerToPartnerData" ADD CONSTRAINT "_CustomerToPartnerData_B_fkey" FOREIGN KEY ("B") REFERENCES "partner_datas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailerToTrailerAccessory" ADD CONSTRAINT "_TrailerToTrailerAccessory_A_fkey" FOREIGN KEY ("A") REFERENCES "trailers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrailerToTrailerAccessory" ADD CONSTRAINT "_TrailerToTrailerAccessory_B_fkey" FOREIGN KEY ("B") REFERENCES "trailer_accessories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PermissionToUser" ADD CONSTRAINT "_PermissionToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "permission"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PermissionToUser" ADD CONSTRAINT "_PermissionToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PermissionToPermissionPreset" ADD CONSTRAINT "_PermissionToPermissionPreset_A_fkey" FOREIGN KEY ("A") REFERENCES "permission"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PermissionToPermissionPreset" ADD CONSTRAINT "_PermissionToPermissionPreset_B_fkey" FOREIGN KEY ("B") REFERENCES "permission_preset"("id") ON DELETE CASCADE ON UPDATE CASCADE;
