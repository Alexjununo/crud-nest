import { Body, Controller, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserCreateDto } from '../shared/dtos/users/user-request.dto';
import { UserCreatedDto } from '../shared/dtos/users/user-response.dto';
import { CreateUserService } from '../services/users/create-user.service';
import { GetAllUsersService } from '../services/users/get-all-users.service';

@Controller('/users')
export class UsersControllers {
  constructor(
    private createUserService: CreateUserService,
    private getAllUsersService: GetAllUsersService,
  ) {}

  @Post()
  public create(@Body() user: UserCreateDto): Observable<UserCreatedDto> {
    return this.createUserService.execute(user);
  }

  @Get()
  public findAll(): Observable<UserCreatedDto[]> {
    return this.getAllUsersService.execute();
  }
}
