import {ConnectionOptions} from 'typeorm';
import {Trip, User} from "../entities";
import {initial1595534135450} from "../migrations/1595534135450-initial";

export const connectionOptions: ConnectionOptions = {
    type: 'mysql',
    host: String(process.env.DB_HOST || 'localhost'),
    port: Number(process.env.DB_PORT || 3306),
    username: String(process.env.DB_USERNAME || 'root'),
    password: String(process.env.DB_PASSWORD || 'root'),
    database: String(process.env.DB_DATABASE || 'trip'),
    migrationsRun: true,
    entities: [
        Trip,
        User
    ],
    migrations: [
        initial1595534135450
    ],
    cli: {
        migrationsDir: './src/migrations',
    },
};
