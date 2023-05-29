import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from './address.entity';
import { CreateAddressDto } from './addressDTO/addressDTO';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>
  ) { }


  //метод добавления 
  async create(addressDTO: CreateAddressDto): Promise<Address> {
    const address = this.addressRepository.create();
    
    address.country = addressDTO.country;
    address.city = addressDTO.city;
    address.street = address.street;
    address.building = addressDTO.building;
    address.flat = addressDTO.flat;
    address.floor = addressDTO.floor;

    await this.addressRepository.save(address); //сохраняем объект в БД
    return address;
  }


  //получения  по ID
  async findOne(id: number): Promise<Address> {
    return this.addressRepository.findOne({
      where: { id }
    })
  }

  //для получения всех 
  async findAll(): Promise<Address[]> {
    const address = await this.addressRepository.find();
    return address;
  }

  //для изменения 
  async update(id: number, updatedAddress: Address) {
    const address = await this.addressRepository.findOne({ where: { id }});
    address.country = updatedAddress.country;
    address.city = updatedAddress.city;
    address.street = updatedAddress.street;
    address.building = updatedAddress.building;
    address.flat = updatedAddress.flat;
    address.floor = updatedAddress.floor;
    await this.addressRepository.save(address);
    return address;
  }

  //для удаления 
  remove(id: number) {
    this.addressRepository.delete({id});
  }

}