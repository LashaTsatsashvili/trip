import { Module } from '@nestjs/common';
import {Connection, createConnection} from "typeorm";
import {connectionOptions} from "./configs/connection.option";

@Module({
  controllers: [
  ],
  providers: [
    {
      provide: Connection,
      useFactory: async () => (await createConnection(connectionOptions)),
    },
  ],
})
export class AppModule {}
