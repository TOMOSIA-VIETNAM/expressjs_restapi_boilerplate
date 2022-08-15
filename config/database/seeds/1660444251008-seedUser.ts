import { MigrationInterface, QueryRunner } from "typeorm"
import { User } from '../../../app/models/User';

export class seedUser1660444251008 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        let user = new User();
        user.first_name = "Timber"
        user.last_name = "Saw"
        await user.save()
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        console.log('Not implemented');
    }
    

}
