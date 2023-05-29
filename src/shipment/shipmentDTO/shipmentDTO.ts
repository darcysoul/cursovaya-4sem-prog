import { Address } from "src/address/address.entity";
import { User } from "src/user/user.entity";

export class CreateShipmentDto {
    id: number;
    weight: number;
    price: number;
    date_order: string;
    status: string;
    address_from: number;
    address_to: number;
    sender: number;
    receiver: number;
}