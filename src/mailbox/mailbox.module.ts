import { Module } from '@nestjs/common';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailboxController } from './mailbox.controller';
import { MailboxService } from './mailbox.service';
import { Mailbox } from './mailbox.entity';
import { Address } from 'src/address/address.entity';
import { User } from 'src/user/user.entity';


@Module({
  controllers: [MailboxController],
  providers: [MailboxService],
  imports: [DatasourceModule,
    TypeOrmModule.forFeature([Mailbox, Address, User])
  ],
})
export class MailboxModule {}
