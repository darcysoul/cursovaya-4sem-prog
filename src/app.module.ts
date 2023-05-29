import { Module } from '@nestjs/common';
import { ClientsModule } from './clients/clients.module'; 
import { DatasourceModule } from './datasource/datasource.module';
import { DepartmentsModule } from './departments/departments.module';
import { PackagesModule } from './packages/packages.module';

@Module({
  imports: [ClientsModule, DatasourceModule, DepartmentsModule, PackagesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
