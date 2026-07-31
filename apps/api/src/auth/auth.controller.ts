import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { MockAuthService } from './mock-auth.service';
import type { RequestWithUser } from './auth.types';
import { JwtGuard } from '../common/guards/jwt.guard';

@ApiTags('auth')
@ApiBearerAuth()
@Controller()
export class AuthController {
  constructor(private readonly mockAuthService: MockAuthService) {}

  @Get('me')
  @UseGuards(JwtGuard)
  @ApiOkResponse({
    schema: { example: { email: 'admin@wittel.com', displayName: 'Administrador CGW' } },
  })
  getMe(@Req() request: RequestWithUser) {
    return this.mockAuthService.getCurrentUser(request.user);
  }
}
