import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {TripService} from "../services";
import {Trip} from "../interfaces";

@Controller('trips')
export class TripController {

    constructor(private tripService: TripService) {
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
