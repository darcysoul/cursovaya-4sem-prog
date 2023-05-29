import { MigrationInterface, QueryRunner } from "typeorm";

export class initial1685318903733 implements MigrationInterface {
    name = 'initial1685318903733'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "shipment" ("id" SERIAL NOT NULL, "weight" integer NOT NULL, "price" integer NOT NULL, "date_order" character varying NOT NULL, "status" character varying NOT NULL, "addressFromId" integer, "addressToId" integer, "senderId" integer, "receiverId" integer, CONSTRAINT "PK_f51f635db95c534ca206bf7a0a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "phone" character varying NOT NULL, "fullname" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "mailbox" ("id" SERIAL NOT NULL, "userId" integer, "addressId" integer, CONSTRAINT "PK_f7191e7ca96ddaeebb57e58650f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "address" ("id" SERIAL NOT NULL, "country" character varying NOT NULL, "city" character varying NOT NULL, "street" character varying NOT NULL, "building" integer NOT NULL, "flat" integer NOT NULL, "floor" integer NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "shipment" ADD CONSTRAINT "FK_eb688fcbf0437a11c4eddd5087e" FOREIGN KEY ("addressFromId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "shipment" ADD CONSTRAINT "FK_ff257cc337a522b7aae4c19868c" FOREIGN KEY ("addressToId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "shipment" ADD CONSTRAINT "FK_320224c124353b2a589cafcfaf0" FOREIGN KEY ("senderId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "shipment" ADD CONSTRAINT "FK_c5559edde1b170d6de774a0ecd3" FOREIGN KEY ("receiverId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "mailbox" ADD CONSTRAINT "FK_984cdc86da77e5428180786db12" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "mailbox" ADD CONSTRAINT "FK_47412dcb22fa99eff48f207f14e" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "mailbox" DROP CONSTRAINT "FK_47412dcb22fa99eff48f207f14e"`);
        await queryRunner.query(`ALTER TABLE "mailbox" DROP CONSTRAINT "FK_984cdc86da77e5428180786db12"`);
        await queryRunner.query(`ALTER TABLE "shipment" DROP CONSTRAINT "FK_c5559edde1b170d6de774a0ecd3"`);
        await queryRunner.query(`ALTER TABLE "shipment" DROP CONSTRAINT "FK_320224c124353b2a589cafcfaf0"`);
        await queryRunner.query(`ALTER TABLE "shipment" DROP CONSTRAINT "FK_ff257cc337a522b7aae4c19868c"`);
        await queryRunner.query(`ALTER TABLE "shipment" DROP CONSTRAINT "FK_eb688fcbf0437a11c4eddd5087e"`);
        await queryRunner.query(`DROP TABLE "address"`);
        await queryRunner.query(`DROP TABLE "mailbox"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "shipment"`);
    }

}
