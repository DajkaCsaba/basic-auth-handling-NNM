import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginInput {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @IsString()
  @IsNotEmpty()
  password!: string;
}
