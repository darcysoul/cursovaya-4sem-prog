import { Module } from '@nestjs/common';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shipment } from 'src/shipment/shipment.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './user.entity';
import { Mailbox } from 'src/mailbox/mailbox.entity';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [DatasourceModule,
    TypeOrmModule.forFeature([Shipment, User, Mailbox])
  ],
})
export class UserModule { }



