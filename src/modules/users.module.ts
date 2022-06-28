import { Module } from '@nestjs/common';
import { UsersControllers } from '../controllers/users.controller';
import { UserRepository } from '../core/repositories/users/user.repository';
import { UsersCacheMemoryRepository } from '../data/cache-memory/users/users-cache-memory.repository';
import { CreateUserService } from '../services/users/create-user.service';
import { GetAllUsersService } from '../services/users/get-all-users.service';

@Module({
  imports: [],
  controllers: [UsersControllers],
  providers: [
    {
      provide: UserRepository,
      useClass: UsersCacheMemoryRepository,
    },
    CreateUserService,
    GetAllUsersService,
  ],
})
export class UsersModule {}
