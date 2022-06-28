import { Injectable } from '@nestjs/common';
import { UserEntity } from '../../../core/domain/entities/users/users.entity';
import { RepositoryCacheMemory } from '../repository-cache-memory';
import { UserRepository } from '../../../core/repositories/users/user.repository';

@Injectable()
export class UsersCacheMemoryRepository
  extends RepositoryCacheMemory<UserEntity>
  implements UserRepository {}
