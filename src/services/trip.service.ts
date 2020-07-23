import {Injectable} from '@nestjs/common';
import {Connection, Repository} from 'typeorm';
import {Trip} from "../entities";

@Injectable()
export class TripService {
    private tripRepository: Repository<Trip>;

    constructor(connection: Connection) {
        this.tripRepository = connection.getRepository(Trip);
    }

    async create() {

    }

    async update() {

    }

    async delete(id: number) {

    }
}
