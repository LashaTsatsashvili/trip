import {Body, Controller, Delete, Get, Param, Post, Put, Request, UseGuards} from '@nestjs/common';
import {TripService} from "../services";
import {JwtAuthGuard} from "../guards/jwt-auth.guard";

@Controller('trips')
export class TripController {

    constructor(private tripService: TripService) {
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getAll(@Request() req) {
        return await this.tripService.getAll(req.user.userId);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOne(@Param('id') id: number) {
        return await this.tripService.getOne(id);
    }

    @Post()
    async create(@Body() trip: any) {
        return await this.tripService.create(trip)
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() body: any) {
        return this.tripService.update(id, body)
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.tripService.delete(id)
    }
}
