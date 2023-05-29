import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserDto } from './userDTO/userDTO';
import { Roles } from 'src/authorization/roles/roles.decorator';
import { Role } from 'src/authorization/roles/role.enum';
import { JwtAuthGuard } from 'src/authorization/jwt/jwt-auth.guard';
import { RolesGuard } from 'src/authorization/roles/roles.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { IncomplitedUserDTO } from './userDTO/incomplited-userDTO';


@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
	@Roles(Role.Admin)
	@UseGuards(JwtAuthGuard, RolesGuard)
	@ApiBearerAuth()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
	@Roles(Role.Admin)
	@UseGuards(JwtAuthGuard, RolesGuard)
	@ApiBearerAuth()
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Put(':id')
	@Roles(Role.Admin)
	@UseGuards(JwtAuthGuard, RolesGuard)
	@ApiBearerAuth()
  update(@Param('id') id: string, @Body() updateUser: User) {
    return this.userService.update(+id, updateUser);
  }

  @Put(':id')
	@Roles(Role.Admin)
	@UseGuards(JwtAuthGuard, RolesGuard)
	@ApiBearerAuth()
  @Post()
  create(@Body() createUser: CreateUserDto) {
    return this.userService.create(createUser);
  }
  
  @Delete(':id')
	@Roles(Role.Admin)
	@UseGuards(JwtAuthGuard, RolesGuard)
	@ApiBearerAuth()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

  @Roles(Role.Admin, Role.User)
	@UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
	@Get('incomplete')
	async findIncomplete(): Promise<IncomplitedUserDTO[]> {
		return await this.userService.findIncomplete();
	}

}