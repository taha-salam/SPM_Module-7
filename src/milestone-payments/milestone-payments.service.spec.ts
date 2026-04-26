import { Test, TestingModule } from '@nestjs/testing';
import { MilestonePaymentsService } from './milestone-payments.service';

describe('MilestonePaymentsService', () => {
  let service: MilestonePaymentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MilestonePaymentsService],
    }).compile();

    service = module.get<MilestonePaymentsService>(MilestonePaymentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
