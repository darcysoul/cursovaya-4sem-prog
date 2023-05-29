import { HttpStatus, Injectable } from '@nestjs/common';
import { DatasourceService } from '../datasource/datasource.service';
import { Department } from './department.entity';

@Injectable()
export class DepartmentsService {
    //Внутри класса объявим конструктор и пропишем параметром сервис псевдо-базы данных
  constructor(private readonly datasourceService: DatasourceService) {}

    //метод добавления 
  create(department: Department) {
    this.datasourceService.getDepartments().push(department);
    return department;
  }

  //получения  по ID
  findOne(id: number) {
    return this.datasourceService
      .getDepartments()
      .find((department) => department.id === id);
  }

  //для получения всех 
  findAll(): Department[] {
    return this.datasourceService.getDepartments();
  }

  //для изменения 
  update(id: number, updatedDepartment: Department) {
    const index = this.datasourceService
      .getDepartments()
      .findIndex((department) => department.id === id);
    this.datasourceService.getDepartments()[index] = updatedDepartment;
    return this.datasourceService.getDepartments()[index];
  }

  //для удаления 
  remove(id: number) {
    const index = this.datasourceService
      .getDepartments()
      .findIndex((department) => department.id === id);
    this.datasourceService.getDepartments().splice(index, 1);
    return HttpStatus.OK;
  }

}