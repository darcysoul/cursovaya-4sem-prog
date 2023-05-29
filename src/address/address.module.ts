import { Module } from '@nestjs/common';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressController } from './address.controller';
import { AddressService } from './address.service';
import { Address } from './address.entity';
import { Shipment } from 'src/shipment/shipment.entity';
import { Mailbox } from 'src/mailbox/mailbox.entity';

@Module({
  controllers: [AddressController],
  providers: [AddressService],
  imports: [DatasourceModule,
    TypeOrmModule.forFeature([Address, Shipment, Mailbox])
  ],
})
export class AddressModule {}
