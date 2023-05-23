import { Module } from '@nestjs/common';
import { BotexpressService } from './botexpress.service';
import { BotexpressController } from './botexpress.controller';

@Module({
  controllers: [BotexpressController],
  providers: [BotexpressService]
})
export class BotexpressModule {}
