import { Module } from '@nestjs/common';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShipmentController } from './shipment.controller';
import { ShipmentService } from './shipment.service';
import { Address } from 'src/address/address.entity';
import { Shipment } from './shipment.entity';
import { User } from 'src/user/user.entity';


@Module({
  controllers: [ShipmentController],
  providers: [ShipmentService],
  imports: [DatasourceModule,
    TypeOrmModule.forFeature([Shipment, User, Address])
  ],
})
export class ShipmentModule {}
