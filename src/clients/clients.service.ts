import { HttpStatus, Injectable } from '@nestjs/common';
import { DatasourceService } from '../datasource/datasource.service';
import { Client } from './client.entity';

@Injectable()
export class ClientsService {
    //Внутри класса объявим конструктор и пропишем параметром сервис псевдо-базы данных
  constructor(private readonly datasourceService: DatasourceService) {}

    //метод добавления клиентов
  create(client: Client) {
    this.datasourceService.getClients().push(client);
    return client;
  }

  //получения клиента по ID
  findOne(id: number) {
    return this.datasourceService
      .getClients()
      .find((client) => client.id === id);
  }

  //для получения всех клиентов
  findAll(): Client[] {
    return this.datasourceService.getClients();
  }

  //для изменения клиента
  update(id: number, updatedClient: Client) {
    const index = this.datasourceService
      .getClients()
      .findIndex((client) => client.id === id);
    this.datasourceService.getClients()[index] = updatedClient;
    return this.datasourceService.getClients()[index];
  }

  //для удаления 
  remove(id: number) {
    const index = this.datasourceService
      .getClients()
      .findIndex((client) => client.id === id);
    this.datasourceService.getClients().splice(index, 1);
    return HttpStatus.OK;
  }

}