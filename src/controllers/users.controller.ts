import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import {
  UserCreateDto,
  UserUpdateDto,
} from '../shared/dtos/users/user-request.dto';
import {
  UserCreatedDto,
  UserUpdatedDto,
} from '../shared/dtos/users/user-response.dto';
import { CreateUserService } from '../services/users/create-user.service';
import { GetAllUsersService } from '../services/users/get-all-users.service';
import { UpdateUserService } from '../services/users/update-user.service';

@Controller('/users')
export class UsersController {
  constructor(
    private createUserService: CreateUserService,
    private getAllUsersService: GetAllUsersService,
    private updateUserService: UpdateUserService,
  ) {}

  @Post()
  public create(@Body() user: UserCreateDto): Observable<UserCreatedDto> {
    return this.createUserService.execute(user);
  }

  @Get()
  public findAll(): Observable<UserCreatedDto[]> {
    return this.getAllUsersService.execute();
  }

  @Put()
  public update(@Body() user: UserUpdateDto): Observable<UserUpdatedDto> {
    return this.updateUserService.execute(user);
  }
}
