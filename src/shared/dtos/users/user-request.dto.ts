export class UserCreateDto {
  id?: number;
  name: string;
  email: string;
  password: string;
}

export class UserUpdateDto {
  id: number;
  name: string;
  email: string;
  password: string;
}
