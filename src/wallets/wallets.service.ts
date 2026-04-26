import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Wallet } from './wallet.entity';

@Injectable()
export class WalletsService {
  constructor(
    @InjectRepository(Wallet)
    private walletRepository: Repository<Wallet>,
  ) {}

  async findByUser(user_id: number) {
    const wallet = await this.walletRepository.findOne({ where: { user_id } });
    if (!wallet) throw new NotFoundException(`Wallet for user ${user_id} not found`);
    return wallet;
  }

  async fund(user_id: number, amount: number) {
    const wallet = await this.findByUser(user_id);
    wallet.available_balance = Number(wallet.available_balance) + amount;
    return this.walletRepository.save(wallet);
  }
}