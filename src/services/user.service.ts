import {Injectable} from '@nestjs/common';
import {Connection, Repository} from 'typeorm';
import {User} from "../entities";

@Injectable()
export class UserService {
    private userRepository: Repository<User>;

    constructor(connection: Connection) {
        this.userRepository = connection.getRepository(User);
    }

    async create(user: User) {
        return this.userRepository.save(user);
    }

    async update(id: number, user) {
        return this.userRepository.update(id, user);
    }

    async delete(id: number) {
        return this.userRepository.delete(id);
    }

    async findOne(username: string) {
        return this.userRepository.findOne({username})
    }
    async findOneWithId(id: number) {
        return this.userRepository.findOneOrFail(id)
    }
}
