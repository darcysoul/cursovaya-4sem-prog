import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards} from '@nestjs/common';
import { AddressService } from './address.service';
import { Address } from './address.entity';
import { CreateAddressDto } from './addressDTO/addressDTO';
import { Roles } from 'src/authorization/roles/roles.decorator';
import { Role } from 'src/authorization/roles/role.enum';
import { JwtAuthGuard } from 'src/authorization/jwt/jwt-auth.guard';
import { RolesGuard } from 'src/authorization/roles/roles.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}
  
  @Get()
	@Roles(Role.Admin, Role.User)
	@UseGuards(JwtAuthGuard, RolesGuard)
	@ApiBearerAuth()
  findAll() {
    return this.addressService.findAll();
  }

  @Get(':id')
  @Roles(Role.Admin, Role.User)
	@UseGuards(JwtAuthGuard, RolesGuard)
	@ApiBearerAuth()
  findOne(@Param('id') id: string) {
    return this.addressService.findOne(+id);
  }

  @Put(':id')
	@Roles(Role.Admin, Role.User)
	@UseGuards(JwtAuthGuard, RolesGuard)
	@ApiBearerAuth()
  update(@Param('id') id: string, @Body() updateAddress: Address) {
    return this.addressService.update(+id, updateAddress);
  }

  @Post()
	@Roles(Role.Admin)
	@ApiBearerAuth()
	@UseGuards(JwtAuthGuard, RolesGuard)
  create(@Body() createAddress: CreateAddressDto) {
    return this.addressService.create(createAddress);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.addressService.remove(+id);
  }

}