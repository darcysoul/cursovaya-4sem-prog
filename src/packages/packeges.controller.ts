import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { Package } from './package.entity';
import { PackagesService } from './packages.service'; 

@Controller('packages')
export class PackagesController {
  constructor(private readonly packagesService: PackagesService) {}
  
  @Get()
  findAll() {
    return this.packagesService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.packagesService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePackage: Package) {
    return this.packagesService.update(+id, updatePackage);
  }

  @Post()
  create(@Body() createPackage: Package) {
    return this.packagesService.create(createPackage);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.packagesService.remove(+id);
  }

}