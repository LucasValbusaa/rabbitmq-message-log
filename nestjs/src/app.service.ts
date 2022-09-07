import { Injectable } from '@nestjs/common';
import { RabbitmqServer } from './providers/rabbitmq/rabbitmq-server';

@Injectable()
export class AppService {
  async getLogs(): Promise<any> {
    const messages: Buffer[] = [];
    const server = new RabbitmqServer('amqp://guest:guest@rabbitmq:5672');
    await server.start();
    await server.consume('nest', (message) => {
      messages.push(message.content);
    });

    if (!messages.length) return { message: 'queue is empity' };

    const formatedMessages = messages.map((m) => {
      return JSON.parse(m.toString());
    });

    return { rabbitmqMessages: formatedMessages };
  }
}
