import {Injectable} from '@nestjs/common';
import {Connection, Repository} from 'typeorm';
import {Trip} from "../entities";
import {UserService} from "./user.service";

@Injectable()
export class TripService {
    private tripRepository: Repository<Trip>;

    constructor(connection: Connection, private userService: UserService) {
        this.tripRepository = connection.getRepository(Trip);
    }

    async create(trip: Trip, userId: number) {
        trip.user = await this.userService.findOneWithId(userId);
        return this.tripRepository.save(trip);
    }

    async update(id: number, trip: Trip) {
        return this.tripRepository.update(id, trip)
    }

    async delete(id: number) {
        return this.tripRepository.delete(id)
    }

    async getAll(userId: any) {
        return this.tripRepository.find({user: userId})
    }

    async getOne(id: number) {
        return this.tripRepository.findOneOrFail(id);
    }
}
