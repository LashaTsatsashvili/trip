import {ConnectionOptions} from 'typeorm';
import {ItemFilter} from '../entities';
import {initial1563807128108} from '../migrations/1563807128108-initial';

export const connectionOptions: ConnectionOptions = {
    type: 'mysql',
    host: String(process.env.DB_HOST || 'localhost'),
    port: Number(process.env.DB_PORT || 3306),
    username: String(process.env.DB_USERNAME || 'root'),
    password: String(process.env.DB_PASSWORD || 'root'),
    database: String(process.env.DB_DATABASE || 'back_db'),
    migrationsRun: true,
    entities: [
        ItemFilter,
    ],
    migrations: [
    ],
    cli: {
        migrationsDir: './src/migrations',
    },
};
