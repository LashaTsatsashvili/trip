import {Module} from '@nestjs/common';
import {Connection, createConnection} from "typeorm";
import {connectionOptions} from "./configs";
import {TripController, UserController} from "./controllers";
import {AuthService, TripService, UserService} from "./services";
import {LocalStrategy} from "./strategy/local.strategy";
import { JwtModule } from '@nestjs/jwt';
import {JwtStrategy} from "./strategy/jwt.strategy";
import {AuthController} from "./controllers/auth.controller";

@Module({
    controllers: [
        TripController,
        UserController,
        AuthController
    ],
    providers: [
        {
            provide: Connection,
            useFactory: async () => (await createConnection(connectionOptions)),
        },
        TripService,
        UserService,
        AuthService,
        JwtStrategy,
        LocalStrategy
    ],
    imports:[
        JwtModule.register({
            secret: 'trip',
            signOptions: { expiresIn: '500s' },
        }),
    ]
})
export class TripModule {
}
