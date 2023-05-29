import { Address } from "src/address/address.entity";
import { User } from "src/user/user.entity";

export class CreateMailboxDto {
    id: number;
    user: number;
    address: number;
}