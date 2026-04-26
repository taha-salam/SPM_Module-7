import { Controller, Get, Post, Patch, Body, Param, Query } from '@nestjs/common';
import { MilestonePaymentsService } from './milestone-payments.service';

@Controller('milestone-payments')
export class MilestonePaymentsController {
  constructor(private readonly milestonePaymentsService: MilestonePaymentsService) {}

  @Get()
  findAll(@Query('escrow_id') escrow_id: string) {
    return this.milestonePaymentsService.findAll(+escrow_id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.milestonePaymentsService.findOne(+id);
  }

  @Post()
  create(@Body() body: {
    escrow_id: number;
    milestone_id: number;
    title: string;
    amount: number;
    due_date?: Date;
  }) {
    return this.milestonePaymentsService.create(body);
  }

  @Patch(':id/approve')
  approve(@Param('id') id: string) {
    return this.milestonePaymentsService.approve(+id);
  }

  @Patch(':id/reject')
  reject(@Param('id') id: string) {
    return this.milestonePaymentsService.reject(+id);
  }

  @Patch(':id/release')
  release(@Param('id') id: string) {
    return this.milestonePaymentsService.release(+id);
  }
}