import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  UseFilters,
} from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { EntityNotFoundExceprtionFilter } from './entity-not-found-exception.filter';
import { UsersService } from './users.service';

@Controller('users')
@UseFilters(EntityNotFoundExceprtionFilter)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll() {
    return {
      data: await this.usersService.findAll(),
    };
  }
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return {
      data: await this.usersService.findOne(id),
    };
  }

  @Post()
  async create(@Body() data: CreateUserDto) {
    return {
      data: await this.usersService.create(data),
    };
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: CreateUserDto) {
    return {
      data: await this.usersService.update(id, data),
    };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: number) {
    await this.usersService.delete(id);
    // return {
    //   message: 'success deleted data',
    // };
  }
}
