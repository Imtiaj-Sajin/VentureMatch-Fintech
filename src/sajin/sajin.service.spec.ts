import { Test, TestingModule } from '@nestjs/testing';
import { SajinService } from './sajin.service';

describe('SajinService', () => {
  let service: SajinService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SajinService],
    }).compile();

    service = module.get<SajinService>(SajinService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
