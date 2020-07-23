import {Injectable} from '@nestjs/common';
import {UserService} from "./user.service";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(private usersService: UserService, private jwtService: JwtService) {
    }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(username);
        if (user && user.password === pass) {
            const {password, ...result} = user;
            console.log(user);
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = {username: user.username, sub: user.userId, role: user.role};
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}