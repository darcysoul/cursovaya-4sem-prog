import { HttpStatus, Injectable } from '@nestjs/common';
import { DatasourceService } from '../datasource/datasource.service';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Shipment } from 'src/shipment/shipment.entity';
import { User } from './user.entity';
import { Mailbox } from 'src/mailbox/mailbox.entity';
import { CreateUserDto } from './userDTO/userDTO';
import { IncomplitedUserDTO } from './userDTO/incomplited-userDTO';


@Injectable()
export class UserService {
  //Внутри класса объявим конструктор и пропишем параметром сервис псевдо-базы данных
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) { }


  //метод добавления 
  async create(userDTO: CreateUserDto): Promise<User> {
    const user = this.userRepository.create();
    user.fullname = userDTO.fullname;
    user.phone = userDTO.phone;
    await this.userRepository.save(user); //сохраняем объект в БД
    return user;
  }

  async findIncomplete(): Promise<IncomplitedUserDTO[]> {
    const users = await this.userRepository.find(); //получаем массив Client из БД
    const incompleteUsers: IncomplitedUserDTO[] = users.map((user) => {
      const incompleteUser = new IncomplitedUserDTO();
      incompleteUser.id = user.id;
      incompleteUser.fullname = user.fullname;
      return incompleteUser;
    });
    return incompleteUsers; //возвращаем массив IncompleteUserDto
  }

  //получения  по ID
  async findOne(id: number): Promise<User> {
    return this.userRepository.findOne({
      where: { id }
    })
  }


  //для получения всех 
  async findAll(): Promise<User[]> {
    const user = await this.userRepository.find({})
    return user;
  }

  //для изменения 
  async update(id: number, updatedUser: User) {
    const user = await this.userRepository.findOne({ where: { id }});
    user.fullname = updatedUser.fullname;
    user.phone = updatedUser.phone;
    await this.userRepository.save(user);
    return user;
  }

  //для удаления 
  remove(id: number) {
    this.userRepository.delete({id});
  }


}