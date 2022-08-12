import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from '../users.controller';
import { CreateUserService } from '../../services/users/create-user.service';
import { GetAllUsersService } from '../../services/users/get-all-users.service';
import { UpdateUserService } from '../../services/users/update-user.service';

describe('Users Controller', () => {
  let usersController: UsersController;
  let createUserService: CreateUserService;
  let getAllUsersService: GetAllUsersService;
  let updateUserService: UpdateUserService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [CreateUserService, GetAllUsersService, UpdateUserService],
    }).compile();

    usersController = app.get<UsersController>(UsersController);
    createUserService = app.get<CreateUserService>(CreateUserService);
    getAllUsersService = app.get<GetAllUsersService>(GetAllUsersService);
    updateUserService = app.get<UpdateUserService>(UpdateUserService);
  });

  it('should create a user', async () => {
    jest.spyOn(createUserService, 'execute').mockImplementation(() => {
      return {
        id: 1,
        name: 'test',
      };
    });
  });
});
