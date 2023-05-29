import { HttpStatus, Injectable } from '@nestjs/common';
import { DatasourceService } from '../datasource/datasource.service';
import { Package } from './package.entity';

@Injectable()
export class PackagesService {
    //Внутри класса объявим конструктор и пропишем параметром сервис псевдо-базы данных
  constructor(private readonly datasourceService: DatasourceService) {}

    //метод добавления 
  create(packages: Package) {
    this.datasourceService.getPackages().push(packages);
    return packages;
  }

  //получения  по ID
  findOne(id: number) {
    return this.datasourceService
      .getPackages()
      .find((packages) => packages.id === id);
  }

  //для получения всех 
  findAll(): Package[] {
    return this.datasourceService.getPackages();
  }

  //для изменения 
  update(id: number, updatedPackage: Package) {
    const index = this.datasourceService
      .getPackages()
      .findIndex((packages) => packages.id === id);
    this.datasourceService.getPackages()[index] = updatedPackage;
    return this.datasourceService.getPackages()[index];
  }

  //для удаления 
  remove(id: number) {
    const index = this.datasourceService
      .getPackages()
      .findIndex((packages) => packages.id === id);
    this.datasourceService.getPackages().splice(index, 1);
    return HttpStatus.OK;
  }

}