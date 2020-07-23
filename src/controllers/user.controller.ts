import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {UserService} from "../services/user.service";

@Controller('users')
export class UserController {

    constructor(private userService: UserService) {
    }

    @Post()
    async create(@Body() body: any) {
        return await this.userService.create(body);
    }

    @Put()
    async update(@Param('id') id: number, @Body() body: any) {
        return this.userService.update(id, body);
    }

    @Delete()
    async delete(@Param('id') id: number) {
        return this.userService.delete(id);
    }
}
