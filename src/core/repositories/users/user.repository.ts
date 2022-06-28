import { Repository } from '../../base/repository';
import { UserEntity } from '../../domain/entities/users/users.entity';

export abstract class UserRepository extends Repository<UserEntity> {}
