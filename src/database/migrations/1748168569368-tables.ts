import { MigrationInterface, QueryRunner } from "typeorm";

export class Tables1748168569368 implements MigrationInterface {
    name = 'Tables1748168569368'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "person" ADD "lastName" nvarchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "person" ADD "gender" nvarchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "person" DROP COLUMN "gender"`);
        await queryRunner.query(`ALTER TABLE "person" DROP COLUMN "lastName"`);
    }

}
