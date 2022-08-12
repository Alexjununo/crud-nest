import { Mapper } from 'src/core/base/mapper';
import { UserEntity } from '../../entities/users/users.entity';
import { UserUpdatedDto } from '../../../../shared/dtos/users/user-response.dto';

export class UserUpdatedMapper implements Mapper<UserUpdatedDto, UserEntity> {
  public mapFrom(data: UserUpdatedDto): UserEntity {
    const user = new UserEntity();

    user.id = data.id;
    user.name = data.name;

    return user;
  }

  public mapTo(data: UserEntity): UserUpdatedDto {
    const user = new UserUpdatedDto();

    user.id = data.id;
    user.name = data.name;
    user.email = data.email;

    return user;
  }
}
