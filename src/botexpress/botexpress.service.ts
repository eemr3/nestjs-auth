import { Injectable } from '@nestjs/common';
import { CreateBotexpressDto } from './dto/create-botexpress.dto';
import { UpdateBotexpressDto } from './dto/update-botexpress.dto';

@Injectable()
export class BotexpressService {
  create(createBotexpressDto: CreateBotexpressDto) {
    return console.log(createBotexpressDto);
  }
  findAll() {
    return `This action returns all botexpress`;
  }

  findOne(id: number) {
    return `This action returns a #${id} botexpress`;
  }

  update(id: number, updateBotexpressDto: UpdateBotexpressDto) {
    return `This action updates a #${id} botexpress`;
  }

  remove(id: number) {
    return `This action removes a #${id} botexpress`;
  }
}
