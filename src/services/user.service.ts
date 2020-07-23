import {Injectable} from '@nestjs/common';
import {Connection, Repository} from 'typeorm';
import {User} from "../entities";

@Injectable()
export class UserService {
    private userRepository: Repository<User>;

    constructor(connection: Connection) {
        this.userRepository = connection.getRepository(User);
    }

    async create() {

    }

    async update() {

    }

    async delete(id: number) {

    }
}
