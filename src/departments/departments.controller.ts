import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { Department } from './department.entity'; 
import { DepartmentsService } from './departments.service'; 

@Controller('department')
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) {}
  
  @Get()
  findAll() {
    return this.departmentsService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.departmentsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDepartment: Department) {
    return this.departmentsService.update(+id, updateDepartment);
  }

  @Post()
  create(@Body() createDepartment: Department) {
    return this.departmentsService.create(createDepartment);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.departmentsService.remove(+id);
  }

}