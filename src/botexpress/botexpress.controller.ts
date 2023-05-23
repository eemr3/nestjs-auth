import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BotexpressService } from './botexpress.service';
import { CreateBotexpressDto } from './dto/create-botexpress.dto';
import { UpdateBotexpressDto } from './dto/update-botexpress.dto';
import { IsPublic } from '../auth/decorators/is-public.decorator';

@Controller('botexpress')
export class BotexpressController {
  constructor(private readonly botexpressService: BotexpressService) {}
  @IsPublic()
  @Post()
  create(@Body() createBotexpressDto: CreateBotexpressDto) {
    return this.botexpressService.create(createBotexpressDto);
  }

  @Get()
  findAll() {
    return this.botexpressService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.botexpressService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBotexpressDto: UpdateBotexpressDto,
  ) {
    return this.botexpressService.update(+id, updateBotexpressDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.botexpressService.remove(+id);
  }
}
