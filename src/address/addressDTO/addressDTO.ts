import { CreateMailboxDto } from "src/mailbox/mailboxDTO/mailboxDTO";
import { CreateShipmentDto } from "src/shipment/shipmentDTO/shipmentDTO";

export class CreateAddressDto {
    id: number;
    country: string;
    city: string;
    street: string;
    building: number;
    flat: number;
    floor: number;
}