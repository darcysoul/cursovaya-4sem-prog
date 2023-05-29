import { Module } from '@nestjs/common';
import { PackagesController } from './packeges.controller';
import { PackagesService } from './packages.service';
import { DatasourceModule } from 'src/datasource/datasource.module';

@Module({
  controllers: [PackagesController],
  providers: [PackagesService],
  imports: [DatasourceModule],
})
export class PackagesModule {}
