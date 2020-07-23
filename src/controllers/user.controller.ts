import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {UserService} from "../services/user.service";

@Controller('users')
export class UserController {

    constructor(private userService: UserService) {
    }

    @Post()
    async create(@Body() body: any) {
    }

    @Delete()
    async delete(@Param('id') id: number) {

    }

    @Put()
    async update(@Param('id') id: number, @Body() body: any) {

    }
}
