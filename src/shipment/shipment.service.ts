import { HttpStatus, Injectable } from '@nestjs/common';
import { DatasourceService } from '../datasource/datasource.service';
import { Shipment } from './shipment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Address } from 'src/address/address.entity';
import { User } from 'src/user/user.entity';
import { CreateShipmentDto } from './shipmentDTO/shipmentDTO';

@Injectable()
export class ShipmentService {
  constructor(
    @InjectRepository(Shipment)
    private readonly shipmentRepository: Repository<Shipment>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>,
  ) {}

  //метод добавления
  async create(shipmentDTO: CreateShipmentDto): Promise<Shipment> {
    const shipment = this.shipmentRepository.create();

    shipment.weight = shipmentDTO.weight;
    shipment.price = shipmentDTO.price;
    shipment.date_order = shipmentDTO.date_order;
    shipment.status = shipmentDTO.status;

    const address_from = await this.addressRepository.findOne({
      where: { id: shipmentDTO.address_from },
    });
    shipment.address_from = address_from;

    const address_to = await this.addressRepository.findOne({
      where: { id: shipmentDTO.address_to },
    });
    shipment.address_to = address_to;

    const sender = await this.userRepository.findOne({
      where: { id: shipmentDTO.sender },
    });
    shipment.sender = sender;

    const receiver = await this.userRepository.findOne({
      where: { id: shipmentDTO.receiver },
    });
    shipment.receiver = receiver;

    await this.shipmentRepository.save(shipment); //сохраняем объект в БД
    return shipment;
  }

  //получения  по ID
  async findOne(id: number): Promise<Shipment> {
    return this.shipmentRepository.findOne({
      where: { id },
      relations: {
        receiver: true,
        sender: true,
        address_from: true,
        address_to: true,
      },
    });
  }

  //для получения всех
  async findAll(): Promise<Shipment[]> {
    const shipment = await this.shipmentRepository.find({
      relations: {
        receiver: true,
        sender: true,
        address_from: true,
        address_to: true,
      },
    });
    return shipment;
  }

  //для изменения
  async update(id: number, updatedShipment: Shipment) {
    const shipment = await this.shipmentRepository.findOne({ where: { id } });

    shipment.date_order = updatedShipment.date_order;
    shipment.weight = updatedShipment.weight;
    shipment.price = updatedShipment.price;
    shipment.status = updatedShipment.status;
    shipment.address_from = updatedShipment.address_from;
    shipment.address_to = updatedShipment.address_to;

    await this.shipmentRepository.save(shipment);
    return shipment;
  }

  //для удаления
  remove(id: number) {
    this.shipmentRepository.delete({ id });
  }
}
