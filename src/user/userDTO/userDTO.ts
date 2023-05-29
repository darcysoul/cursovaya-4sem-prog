import { CreateMailboxDto } from "src/mailbox/mailboxDTO/mailboxDTO";
import { CreateShipmentDto } from "src/shipment/shipmentDTO/shipmentDTO";

export class CreateUserDto {
    id: number;
    phone: string;
    fullname: string;
}