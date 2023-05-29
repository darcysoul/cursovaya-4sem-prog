import { Address } from 'src/address/address.entity';
import { User } from 'src/user/user.entity';
import {
    Column,
    Entity,
    JoinTable,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm'


@Entity('shipment')
export class Shipment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    weight: number;

    @Column()
    price: number;

    @Column()
    date_order: string;

    @Column()
    status: string;

    @ManyToOne(() => Address, (user) => user.sent_shipments)
    @JoinTable({
        name: 'shipment_address_to',
        joinColumn: { name: 'shipment_id' }, 
        inverseJoinColumn: {name: 'address_id'}
      })
    address_from: Address;

    @ManyToOne(() => Address, (user) => user.received_shipments)
    address_to: Address;
    @JoinTable({
        name: 'shipment_address_from',
        joinColumn: { name: 'shipment_id' }, 
        inverseJoinColumn: {name: 'address_id'}
      })

    @ManyToOne(() => User, (user) => user.sent_shipments)
    @JoinTable({
        name: 'shipment_user_from',
        joinColumn: { name: 'shipment_id' }, 
        inverseJoinColumn: {name: 'user_id'}
      })
    sender: User;

    @ManyToOne(() => User, (user) => user.sent_shipments)
    @JoinTable({
        name: 'shipment_user_from',
        joinColumn: { name: 'shipment_id' }, 
        inverseJoinColumn: {name: 'user_id'}
      })
    receiver: User;
  
 
}