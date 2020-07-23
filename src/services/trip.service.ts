import {Injectable} from '@nestjs/common';
import {Connection, Repository} from 'typeorm';
import {Trip} from "../entities";

@Injectable()
export class TripService {
    private tripRepository: Repository<Trip>;

    constructor(connection: Connection) {
        this.tripRepository = connection.getRepository(Trip);
    }

    async create(trip: Trip) {
        return this.tripRepository.save(trip);
    }

    async update(id: number, trip: Trip) {
        return this.tripRepository.update(id, trip)
    }

    async delete(id: number) {
        return this.tripRepository.delete(id)
    }
}
