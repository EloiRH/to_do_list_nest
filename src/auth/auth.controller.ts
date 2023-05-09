/* eslint-disable prettier/prettier */
import {
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
  Param,
  Req,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Req() req){
    return this.authService.login(req.user);
  }
  @UseGuards(AuthGuard('jwt'))
  @Get(':email')
  async getUserData(@Param('email')email:string, @Req() req:any) {
    return await this.usersService.getUser(email);
  }
}

