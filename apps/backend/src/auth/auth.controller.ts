import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthManager } from '@/auth/auth.manager';
import { LoginInput } from '@/auth/inputs/login.input';
import { CurrentUser } from '@/auth/decorators/curent-user.decorator';
import { RefreshGuard } from '@/auth/guards/refresh.guard';
import { Public } from '@/auth/decorators/public.decorator';
import { TokenUser, UserDTO } from '@/auth/auth.types';
import { SetPasswordInput } from '@/auth/inputs/set-password.input';
import { RequestModifyPasswordInput } from '@/auth/inputs/request-modify-password.input';
import { RegisterInput } from './inputs/register.input';
import { Maybe } from '@/common/common.type';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authManager: AuthManager) {}

  @Get()
  whoAmI(@CurrentUser() user: TokenUser): Promise<Maybe<UserDTO>> {
    return this.authManager.findCurrentUser(user);
  }

  @Public()
  @Post('login')
  login(@Body() input: LoginInput) {
    return this.authManager.login(input);
  }

  @Public()
  @Post('register')
  register(@Body() input: RegisterInput): Promise<UserDTO> {
    return this.authManager.register(input);
  }

  @Public()
  @UseGuards(RefreshGuard)
  @Post('refresh')
  refresh(@CurrentUser() user: TokenUser) {
    return this.authManager.refreshToken(user);
  }

  @Public()
  @Post('set-password')
  async setPassword(@Body() input: SetPasswordInput) {
    await this.authManager.setPassword(input);
    return { success: true };
  }

  @Public()
  @Post('request-password-modify')
  async requestPasswordModify(@Body() input: RequestModifyPasswordInput) {
    await this.authManager.requestPasswordModify(input);
    return { success: true };
  }
}
