import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { DatasourceModule } from './datasource/datasource.module';
import { ShipmentModule } from './shipment/shipment.module';
import { AddressModule } from './address/address.module';
import { MailboxModule } from './mailbox/mailbox.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    UserModule,
    DatasourceModule,
    ShipmentModule,
    AddressModule,
    MailboxModule,
    TypeOrmModule.forRoot({
      type: 'postgres', //тип подключаемой БД
      port: 5432, //порт
      database: 'education',
      username: 'postgres',
      password: '12345',
      host: 'localhost', //хост, в нашем случае БД развернута локально
      synchronize: false, //отключаем автосинхронизацию(в противном случае при каждом перезапуске наша БД будет создаваться заново)
      logging: 'all', //включим логирование для удобства отслеживания процессов
      entities: ['dist/**/*.entity{.ts,.js}'], //указываем путь к сущностям
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
