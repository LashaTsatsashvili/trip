import {MigrationInterface, QueryRunner} from "typeorm";

export class initial1595534135450 implements MigrationInterface {
    name = 'initial1595534135450'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `Trips` (`id` int NOT NULL AUTO_INCREMENT, `destination` varchar(255) NOT NULL, `startDate` datetime NOT NULL, `endDate` datetime NOT NULL, `comment` text NOT NULL, `userId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `Users` (`id` int NOT NULL AUTO_INCREMENT, `username` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `role` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `Trips` ADD CONSTRAINT `FK_f81936822ecece94f4bfe323226` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Trips` DROP FOREIGN KEY `FK_f81936822ecece94f4bfe323226`");
        await queryRunner.query("DROP TABLE `Users`");
        await queryRunner.query("DROP TABLE `Trips`");
    }

}
