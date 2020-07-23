import { Module } from '@nestjs/common';
import {Connection, createConnection} from "typeorm";
import {connectionOptions} from "./configs";
import {TripController, UserController} from "./controllers";
import {TripService, UserService} from "./services";

@Module({
  controllers: [
      TripController,
      UserController
  ],
  providers: [
    {
      provide: Connection,
      useFactory: async () => (await createConnection(connectionOptions)),
    },
      TripService,
      UserService
  ],
})
export class TripModule {}
