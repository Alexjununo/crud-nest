import { Mapper } from '../../../base/mapper';
import { UserUpdateDto } from '../../../../shared/dtos/users/user-request.dto';
import { UserEntity } from '../../entities/users/users.entity';

export class UserUpdateMapper extends Mapper<UserUpdateDto, UserEntity> {
  public mapFrom(data: UserUpdateDto): UserEntity {
    const user = new UserEntity();

    user.name = data.name;
    user.email = data.email;
    user.password = data.password;

    return user;
  }

  public mapTo(data: UserEntity): UserUpdateDto {
    const user = new UserUpdateDto();

    user.id = data.id;
    user.name = data.name;
    user.email = data.email;
    user.password = data.password;

    return user;
  }
}
