import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { WalletsService } from './wallets.service';

@Controller('wallets')
export class WalletsController {
  constructor(private readonly walletsService: WalletsService) {}

  // GET /wallets/user/:userId - get wallet balance for a user
  @Get('user/:userId')
  findByUser(@Param('userId') userId: string) {
    return this.walletsService.findByUser(+userId);
  }

  // POST /wallets/fund - add funds to wallet
  @Post('fund')
  fund(@Body() body: { user_id: number; amount: number }) {
    return this.walletsService.fund(body.user_id, body.amount);
  }
}