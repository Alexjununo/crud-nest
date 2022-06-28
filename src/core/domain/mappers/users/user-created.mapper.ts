import { Mapper } from 'src/core/base/mapper';
import { UserEntity } from '../../entities/users/users.entity';
import { UserCreatedDto } from '../../../../shared/dtos/users/user-response.dto';

export class UserCreatedMapper implements Mapper<UserCreatedDto, UserEntity> {
  public mapFrom(data: UserCreatedDto): UserEntity {
    const user = new UserEntity();

    user.id = data.id;
    user.name = data.name;

    return user;
  }

  public mapTo(data: UserEntity): UserCreatedDto {
    const user = new UserCreatedDto();

    user.id = data.id;
    user.name = data.name;

    return user;
  }
}
