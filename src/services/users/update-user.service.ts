import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Service } from '../../core/base/service';
import { UserRepository } from '../../core/repositories/users/user.repository';
import { UserUpdateMapper } from '../../core/domain/mappers/users/user-update.mapper';
import { UserUpdatedMapper } from '../../core/domain/mappers/users/user-updated.mapper';
import { UserUpdateDto } from '../../shared/dtos/users/user-request.dto';
import { UserUpdatedDto } from '../../shared/dtos/users/user-response.dto';

@Injectable()
export class UpdateUserService implements Service<UserUpdatedDto> {
  private userUpdateMapper: UserUpdateMapper;
  private userUpdatedMapper: UserUpdatedMapper;

  constructor(private readonly repository: UserRepository) {
    this.userUpdateMapper = new UserUpdateMapper();
    this.userUpdatedMapper = new UserUpdatedMapper();
  }

  public execute(user: UserUpdateDto): Observable<UserUpdatedDto> {
    const entity = this.userUpdateMapper.mapFrom(user);

    return this.repository
      .update(entity.id, entity)
      .pipe(map(this.userUpdatedMapper.mapTo));
  }
}
