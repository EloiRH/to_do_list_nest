/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Get,
  Request,
  Post,
  UseGuards,
  Param
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from './users.schema';
import { UsersService } from './users.service';


@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async addUser(@Body() user: User) {
    return await this.usersService.newUser(user);
  }
  @Get()
  async getUser(@Param('email') email: string) {
    return await this.usersService.getUser(email);
  }
}

