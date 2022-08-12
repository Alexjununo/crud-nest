import { Module } from '@nestjs/common';
import { UsersController } from '../controllers/users.controller';
import { UserRepository } from '../core/repositories/users/user.repository';
import { UsersCacheMemoryRepository } from '../data/cache-memory/users/users-cache-memory.repository';
import { CreateUserService } from '../services/users/create-user.service';
import { GetAllUsersService } from '../services/users/get-all-users.service';
import { UpdateUserService } from '../services/users/update-user.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [
    {
      provide: UserRepository,
      useClass: UsersCacheMemoryRepository,
    },
    CreateUserService,
    GetAllUsersService,
    UpdateUserService,
  ],
})
export class UsersModule {}
