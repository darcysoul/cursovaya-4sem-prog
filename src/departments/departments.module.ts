import { Module } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { DepartmentsController } from './departments.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';

@Module({
  controllers: [DepartmentsController],
  providers: [DepartmentsService],
  imports: [DatasourceModule],
})
export class DepartmentsModule {}
