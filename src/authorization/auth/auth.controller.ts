import { Controller, Request, Post, UseGuards, Get, UnauthorizedException, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from '../jwt/jwt-auth.guard';
import { TheUser } from 'src/authorization/users/users.entity';
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import { LocalAuthGuard } from '../local/local-auth.guard';

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@ApiBearerAuth()
	@ApiOkResponse()
	@UseGuards(LocalAuthGuard)
	@Post('login')
	async login(@Body() user: TheUser) {
	const result = await this.authService.login(user);
	if (!result) {
		return new UnauthorizedException('Username or password is incorrect');
	}
		return result;
	}
}