import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class RequestModifyPasswordInput {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email!: string;
}
