import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards} from '@nestjs/common';
import { MailboxService } from './mailbox.service';
import { Mailbox } from './mailbox.entity';
import { CreateMailboxDto } from './mailboxDTO/mailboxDTO';
import { Roles } from 'src/authorization/roles/roles.decorator';
import { Role } from 'src/authorization/roles/role.enum';
import { JwtAuthGuard } from 'src/authorization/jwt/jwt-auth.guard';
import { RolesGuard } from 'src/authorization/roles/roles.guard';
import { ApiBearerAuth } from '@nestjs/swagger';



@Controller('mailbox')
export class MailboxController {
  constructor(private readonly mailboxService: MailboxService) {}
  @Get()
	@Roles(Role.Admin)
	@UseGuards(JwtAuthGuard, RolesGuard)
	@ApiBearerAuth()
  findAll() {
    return this.mailboxService.findAll();
  }

  @Get(':id')
	@Roles(Role.Admin)
	@UseGuards(JwtAuthGuard, RolesGuard)
	@ApiBearerAuth()
  findOne(@Param('id') id: string) {
    return this.mailboxService.findOne(+id);
  }

  @Put(':id')
	@Roles(Role.Admin)
	@UseGuards(JwtAuthGuard, RolesGuard)
	@ApiBearerAuth()
  update(@Param('id') id: string, @Body() updateMailbox: Mailbox) {
    return this.mailboxService.update(+id, updateMailbox);
  }

  @Post()
	@Roles(Role.Admin)
	@UseGuards(JwtAuthGuard, RolesGuard)
	@ApiBearerAuth()
  create(@Body() createMailbox: CreateMailboxDto) {
    return this.mailboxService.create(createMailbox);
  }

  @Delete(':id')
	@Roles(Role.Admin)
	@UseGuards(JwtAuthGuard, RolesGuard)
	@ApiBearerAuth()
  remove(@Param('id') id: string) {
    return this.mailboxService.remove(+id);
  }

}