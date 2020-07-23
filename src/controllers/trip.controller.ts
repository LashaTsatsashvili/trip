import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {TripService} from "../services/trip.service";

@Controller('trips')
export class TripController {

    constructor(private tripService: TripService) {
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
