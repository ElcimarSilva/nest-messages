import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';

import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';
@Controller('messages')
export class MessagesController {
  MessageService: MessagesService;
  //todo: refact bacause not use in real apps
  constructor() {
    this.MessageService = new MessagesService();
  }
  @Get('/messages')
  listMessages() {
    return this.MessageService.findAll();
  }

  @Post('/messages')
  createMessage(@Body() body: CreateMessageDto) {
    return this.MessageService.create(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.MessageService.findOne(id);
    if (!message) {
      throw new NotFoundException('message not found');
    }
    return message;
  }
}
