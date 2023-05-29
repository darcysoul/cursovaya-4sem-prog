import { Injectable } from '@nestjs/common';
import {Client} from 'src/clients/client.entity';
import { Package } from 'src/packages/package.entity';
import { Department } from 'src/departments/department.entity';

@Injectable()
export class DatasourceService {

  private clients: Client[] = [];

  getClients(): Client[] {
    return this.clients;
  }
  
  private packeges: Package[] = [];

  getPackages(): Package[] {
    return this.packeges;
  }
  private departments: Department[] = [];

  getDepartments(): Department[] {
    return this.departments;
  }
}
