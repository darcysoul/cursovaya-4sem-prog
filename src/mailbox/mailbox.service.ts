import { HttpStatus, Injectable } from '@nestjs/common';
import { DatasourceService } from '../datasource/datasource.service';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Mailbox } from './mailbox.entity';
import { User } from 'src/user/user.entity';
import { Address } from 'src/address/address.entity';
import { CreateMailboxDto } from './mailboxDTO/mailboxDTO';



@Injectable()
export class MailboxService {
  constructor(
    @InjectRepository(Mailbox)
    private readonly mailboxRepository: Repository<Mailbox>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>,
  ) { }

  //метод добавления 
  async create(mailboxDTO: CreateMailboxDto): Promise<Mailbox> {
    const mailbox = this.mailboxRepository.create();
    
    const address = await this.addressRepository.findOne({
      where: { id: mailboxDTO.address },
    });
    mailbox.address = address;

    const user = await this.userRepository.findOne({
      where: { id: mailboxDTO.user },
    });
    mailbox.user = user;

    await this.mailboxRepository.save(mailbox); //сохраняем объект в БД
    return mailbox;
  }

  //получения  по ID
  async findOne(id: number): Promise<Mailbox> {
    return this.mailboxRepository.findOne({
      where: { id },
      relations: { 
        user: true, 
        address: true 
      }
    })
  }

  //для получения всех 
  async findAll(): Promise<Mailbox[]> {
    const mailbox = await this.mailboxRepository.find({
      relations: {
        user: true, 
        address: true
      }
    })
    return mailbox;
  }

  //для изменения 
  async update(id: number, updatedMailbox: Mailbox) {
    const mailbox = await this.mailboxRepository.findOne({ where: { id }});
    mailbox.address = updatedMailbox.address;
    mailbox.user = updatedMailbox.user;
    await this.mailboxRepository.save(mailbox);
    return mailbox;
  }

  //для удаления 
  remove(id: number) {
    this.mailboxRepository.delete({id});
  }

}