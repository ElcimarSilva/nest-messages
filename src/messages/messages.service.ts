import { MessagesRepository } from './messages.repository';

export class MessagesService {
  messagesRepo: MessagesRepository;
  //todo: refact bacause not use in real apps
  constructor() {
    this.messagesRepo = new MessagesRepository();
  }

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
