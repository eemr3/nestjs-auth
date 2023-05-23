import { Test, TestingModule } from '@nestjs/testing';
import { BotexpressService } from './botexpress.service';

describe('BotexpressService', () => {
  let service: BotexpressService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BotexpressService],
    }).compile();

    service = module.get<BotexpressService>(BotexpressService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
