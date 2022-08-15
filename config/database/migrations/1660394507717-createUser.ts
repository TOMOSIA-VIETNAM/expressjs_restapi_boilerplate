import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createUser1660394507717 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated:true,
                        generationStrategy:'increment'
                    },
                    {
                        name: "first_name",
                        type: "varchar",
                    },
                    {
                        name: "last_name",
                        type: "varchar",
                    }
                ],
            }),
            true,
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE "users"');
    }

}
