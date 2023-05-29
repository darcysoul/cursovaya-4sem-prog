import { Injectable } from '@nestjs/common';
import { User } from 'src/user/user.entity';
import { Shipment } from 'src/shipment/shipment.entity';
import { Address } from 'src/address/address.entity';
import { Mailbox } from 'src/mailbox/mailbox.entity';

@Injectable()
export class DatasourceService {

  private users: User[] = [];

  getUsers(): User[] {
    return this.users;
  }
  
  private shipments: Shipment[] = [];

  getShipments(): Shipment[] {
    return this.shipments;
  }

  private addresses: Address[] = [];

  getAddress(): Address[] {
    return this.addresses;
  }

  private mailboxes: Mailbox[] = [];

  getMailboxes(): Mailbox[] {
    return this.mailboxes;
  }

}
