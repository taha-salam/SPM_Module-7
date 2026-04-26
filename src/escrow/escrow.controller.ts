import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { EscrowService } from './escrow.service';

@Controller('escrow')
export class EscrowController {
  constructor(private readonly escrowService: EscrowService) {}

  @Get()
  findAll() {
    return this.escrowService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.escrowService.findOne(+id);
  }

  @Get('project/:projectId')
  findByProject(@Param('projectId') projectId: string) {
    return this.escrowService.findByProject(+projectId);
  }

  @Post()
  create(@Body() body: {
    project_id: number;
    client_user_id: number;
    freelancer_user_id: number;
    currency_code: string;
    total_amount: number;
  }) {
    return this.escrowService.create(body);
  }

  @Post(':id/fund')
  fund(@Param('id') id: string, @Body() body: { amount: number }) {
    return this.escrowService.fund(+id, body.amount);
  }

  @Post(':id/freeze')
  freeze(@Param('id') id: string) {
    return this.escrowService.freeze(+id);
  }

  @Post(':id/close')
  close(@Param('id') id: string) {
    return this.escrowService.close(+id);
  }
}