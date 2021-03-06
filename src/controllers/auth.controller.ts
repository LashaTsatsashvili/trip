import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import {AuthService} from "../services";
import {JwtAuthGuard} from "../guards/jwt-auth.guard";
import {LocalAuthGuard} from "../guards/local-auth.guard";

@Controller()
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}