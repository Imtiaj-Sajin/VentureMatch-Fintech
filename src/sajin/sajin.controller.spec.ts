import { Test, TestingModule } from '@nestjs/testing';
import { SajinController } from './sajin.controller';

describe('SajinController', () => {
  let controller: SajinController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SajinController],
    }).compile();

    controller = module.get<SajinController>(SajinController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
