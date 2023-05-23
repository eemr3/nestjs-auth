import { PartialType } from '@nestjs/mapped-types';
import { CreateBotexpressDto } from './create-botexpress.dto';

export class UpdateBotexpressDto extends PartialType(CreateBotexpressDto) {}
