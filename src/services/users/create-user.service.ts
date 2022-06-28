import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Service } from '../../core/base/service';
import { UserRepository } from '../../core/repositories/users/user.repository';
import { UserCreateMapper } from '../../core/domain/mappers/users/user-create.mapper';
import { UserCreatedMapper } from '../../core/domain/mappers/users/user-created.mapper';
import { UserCreateDto } from '../../shared/dtos/users/user-request.dto';
import { UserCreatedDto } from '../../shared/dtos/users/user-response.dto';

@Injectable()
export class CreateUserService implements Service<UserCreatedDto> {
  private userCreateMapper: UserCreateMapper;
  private userCreatedMapper: UserCreatedMapper;

  constructor(private readonly repository: UserRepository) {
    this.userCreateMapper = new UserCreateMapper();
    this.userCreatedMapper = new UserCreatedMapper();
  }

  public execute(user: UserCreateDto): Observable<UserCreatedDto> {
    const entity = this.userCreateMapper.mapFrom(user);

    return this.repository
      .create(entity)
      .pipe(map(this.userCreatedMapper.mapTo));
  }
}
