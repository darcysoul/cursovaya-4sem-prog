import { Mailbox } from 'src/mailbox/mailbox.entity';
import { Shipment } from 'src/shipment/shipment.entity';
import {
    Column,
    Entity,
    JoinTable,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm'

@Entity('address')
export class Address {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    country: string;

    @Column()
    city: string;

    @Column()
    street: string;

    @Column()
    building: number;

    @Column()
    flat: number;

    @Column()
    floor: number;

    @OneToMany(() => Shipment, (shipment) => shipment.address_from)
    @JoinTable({
        name: 'address_shipment_from',
        joinColumn: { name: 'address_id' }, 
        inverseJoinColumn: {name: 'shipment_id'}
      })
    sent_shipments: Shipment[];

    @OneToMany(() => Shipment, (shipment) => shipment.address_to)
    @JoinTable({
        name: 'address_shipment_to',
        joinColumn: { name: 'address_id' }, 
        inverseJoinColumn: {name: 'shipment_id'}
      })
    received_shipments: Shipment[];

    @OneToMany(() => Mailbox, (mailbox) => mailbox.user)
    @JoinTable({
        name: 'address_mailbox',
        joinColumn: { name: 'address_id' }, 
        inverseJoinColumn: {name: 'mailbox_id'}
      })
    mailbox: Mailbox[];
    
}