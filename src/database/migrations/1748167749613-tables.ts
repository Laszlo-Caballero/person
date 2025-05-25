import { MigrationInterface, QueryRunner } from "typeorm";

export class Tables1748167749613 implements MigrationInterface {
    name = 'Tables1748167749613'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "person" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, "age" int NOT NULL, "phone" nvarchar(255) NOT NULL, CONSTRAINT "PK_5fdaf670315c4b7e70cce85daa3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "person"`);
    }

}
