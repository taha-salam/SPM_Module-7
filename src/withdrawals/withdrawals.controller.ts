import { Controller, Get, Post, Patch, Body, Param } from '@nestjs/common';
import { WithdrawalsService } from './withdrawals.service';

@Controller('withdrawals')
export class WithdrawalsController {
  constructor(private readonly withdrawalsService: WithdrawalsService) {}

  // GET /withdrawals - get all withdrawals for current user
  @Get()
  findAll() {
    return this.withdrawalsService.findAll();
  }

  // GET /withdrawals/:id - get single withdrawal
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.withdrawalsService.findOne(+id);
  }

  // POST /withdrawals - create new withdrawal request
  @Post()
  create(@Body() body: { amount: number; payment_method_id: number; wallet_id: number }) {
  return this.withdrawalsService.create(body);
  }

  // PATCH /withdrawals/:id/approve - admin approves
  @Patch(':id/approve')
  approve(@Param('id') id: string) {
    return this.withdrawalsService.approve(+id);
  }

  // PATCH /withdrawals/:id/reject - admin rejects
  @Patch(':id/reject')
  reject(@Param('id') id: string, @Body() body: { admin_note: string }) {
    return this.withdrawalsService.reject(+id, body.admin_note);
  }
}