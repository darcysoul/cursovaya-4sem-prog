import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards} from '@nestjs/common';
import { Shipment } from './shipment.entity';
import { ShipmentService } from './shipment.service'; 
import { CreateShipmentDto } from './shipmentDTO/shipmentDTO';
import { Roles } from 'src/authorization/roles/roles.decorator';
import { Role } from 'src/authorization/roles/role.enum';
import { JwtAuthGuard } from 'src/authorization/jwt/jwt-auth.guard';
import { RolesGuard } from 'src/authorization/roles/roles.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('shipment')
export class ShipmentController {
  constructor(private readonly shipmentService: ShipmentService) {}
  
  @Get()
	@Roles(Role.Admin)
	@UseGuards(JwtAuthGuard, RolesGuard)
	@ApiBearerAuth()
  findAll() {
    return this.shipmentService.findAll();
  }
  @Get(':id')
  @Roles(Role.Admin)
	@UseGuards(JwtAuthGuard, RolesGuard)
	@ApiBearerAuth()
  findOne(@Param('id') id: string) {
    return this.shipmentService.findOne(+id);
  }

  @Put(':id')
  @Roles(Role.Admin)
	@UseGuards(JwtAuthGuard, RolesGuard)
	@ApiBearerAuth()
  update(@Param('id') id: string, @Body() updateShipment: Shipment) {
    return this.shipmentService.update(+id, updateShipment);
  }

  @Post()
  @Roles(Role.Admin)
	@ApiBearerAuth()
	@UseGuards(JwtAuthGuard, RolesGuard)
  create(@Body() createShipment: CreateShipmentDto) {
    return this.shipmentService.create(createShipment);
  }
  @Delete(':id')
  @Roles(Role.Admin)
	@ApiBearerAuth()
	@UseGuards(JwtAuthGuard, RolesGuard)
  remove(@Param('id') id: string) {
    return this.shipmentService.remove(+id);
  }

}