import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get('/messages')
  listMessages() {
    return 'messages';
  }

  @Post('/messages')
  createMessage() {
    return 'message created';
  }
}
