import { IsNotEmpty, IsString } from 'class-validator';

export class SetPasswordInput {
  @IsString()
  @IsNotEmpty()
  token!: string;

  @IsString()
  @IsNotEmpty()
  password!: string;
}
