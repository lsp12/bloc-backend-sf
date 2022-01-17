import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Req
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Request } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('login/:email/:password')
  login(@Param('email') email: string, @Param('password') password: string) {
    return this.usersService.Login(email, password);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':email/email')
  findEmail(@Param('email') email: string) {
    return this.usersService.findByEmail(email);
  }

  @Get(':name/name')
  findName(@Param('name') name: string) {
    return this.usersService.findByName(name);
  }

  @Get('onlyuser')
  findOne(@Req() request: Request) {
    const id = request.headers.user;
    if (typeof id === 'string') {
      return this.usersService.findOne(id);
    }
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
