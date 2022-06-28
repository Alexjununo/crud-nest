import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Service } from '../../core/base/service';
import { UserCreatedMapper } from '../../core/domain/mappers/users/user-created.mapper';
import { UserRepository } from '../../core/repositories/users/user.repository';
import { UserCreatedDto } from '../../shared/dtos/users/user-response.dto';

@Injectable()
export class GetAllUsersService implements Service<UserCreatedDto[]> {
  private userCreatedMapper: UserCreatedMapper;

  constructor(private readonly repository: UserRepository) {
    this.userCreatedMapper = new UserCreatedMapper();
  }

  public execute(): Observable<UserCreatedDto[]> {
    return this.repository
      .getAll()
      .pipe(map((data) => data.map(this.userCreatedMapper.mapTo)));
  }
}
