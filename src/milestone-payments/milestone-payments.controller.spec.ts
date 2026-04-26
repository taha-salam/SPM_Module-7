import { Test, TestingModule } from '@nestjs/testing';
import { MilestonePaymentsController } from './milestone-payments.controller';

describe('MilestonePaymentsController', () => {
  let controller: MilestonePaymentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MilestonePaymentsController],
    }).compile();

    controller = module.get<MilestonePaymentsController>(MilestonePaymentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
