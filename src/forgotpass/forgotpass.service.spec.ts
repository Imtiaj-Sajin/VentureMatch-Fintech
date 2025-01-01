import { Test, TestingModule } from '@nestjs/testing';
import { forgotpassService } from './forgotpass.service';

describe('forgotpassService', () => {
  let service: forgotpassService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [forgotpassService],
    }).compile();

    service = module.get<forgotpassService>(forgotpassService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
