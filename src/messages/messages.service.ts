import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(public messagesRepo: MessagesRepository) {}

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(message: string) {
    return this.messagesRepo.create(message);
  }

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }
}
