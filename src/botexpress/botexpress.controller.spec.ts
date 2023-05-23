import { Test, TestingModule } from '@nestjs/testing';
import { BotexpressController } from './botexpress.controller';
import { BotexpressService } from './botexpress.service';

describe('BotexpressController', () => {
  let controller: BotexpressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BotexpressController],
      providers: [BotexpressService],
    }).compile();

    controller = module.get<BotexpressController>(BotexpressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
