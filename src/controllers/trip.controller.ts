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
        return await this.tripService.getAll(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOne(@Param('id') id: number) {
        return await this.tripService.getOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() trip: any, @Request() req) {
        return await this.tripService.create(trip, req.user.userId)
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async update(@Param('id') id: number, @Body() body: any) {
        return this.tripService.update(id, body)
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.tripService.delete(id)
    }
}
