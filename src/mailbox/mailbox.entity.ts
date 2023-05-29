import { Address } from 'src/address/address.entity';
import { User } from 'src/user/user.entity';
import {
    Entity,
    JoinTable,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm'

@Entity('mailbox')
export class Mailbox {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.mailbox)
    @JoinTable({
        name: 'mailbox_user',
        joinColumn: { name: 'mailbox_id' }, 
        inverseJoinColumn: {name: 'user_id'}
      })
    user: User;

    @ManyToOne(() => Address, (address) => address.mailbox)
    @JoinTable({
        name: 'mailbox_address',
        joinColumn: { name: 'mailbox_id' }, 
        inverseJoinColumn: {name: 'address_id'}
      })
    address: Address;
}