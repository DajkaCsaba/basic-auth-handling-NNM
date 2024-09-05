import { User } from '@prisma/client';

export type TokenUser = {
  id: string;
};

export type UserDAO = User;

export type UserDTO = Pick<User, 'id' | 'firstName' | 'lastName' | 'email'>;
