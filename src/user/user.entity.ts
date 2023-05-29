import { Mailbox } from "src/mailbox/mailbox.entity";
import { Shipment } from "src/shipment/shipment.entity";
import {
    Column,
    Entity,
    JoinTable,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    phone: string;

    @Column()
    fullname: string;

    @OneToMany(() => Shipment, (shipment) => shipment.sender)
    @JoinTable({
        name: 'user_shipment_from',
        joinColumn: { name: 'user_id' }, 
        inverseJoinColumn: {name: 'shipment_id'}
      })
    sent_shipments: Shipment[];

    @OneToMany(() => Shipment, (shipment) => shipment.receiver)
    @JoinTable({
        name: 'user_shipment_to',
        joinColumn: { name: 'user_id' }, 
        inverseJoinColumn: {name: 'shipment_id'}
      })
    received_shipments: Shipment[];

    @OneToMany(() => Mailbox, (mailbox) => mailbox.user)
    @JoinTable({
        name: 'user_mailbox',
        joinColumn: { name: 'user_id' }, 
        inverseJoinColumn: {name: 'mailbox_id'}
      })
    mailbox: Mailbox[];
    

}


