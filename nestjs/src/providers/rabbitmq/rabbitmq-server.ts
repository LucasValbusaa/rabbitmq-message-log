import { Connection, Channel, connect, Message } from 'amqplib';

export class RabbitmqServer {
  private conn: Connection;
  private channel: Channel;

  constructor(private readonly uri: string) {}

  async start(): Promise<void> {
    this.conn = await connect(this.uri);
    this.channel = await this.conn.createChannel();
  }

  async publishInQueue(queue: string, message: string): Promise<void> {
    this.channel.sendToQueue(queue, Buffer.from(message));
    await this.close();
  }

  async consume(queue: string, callback: (message: Message) => void) {
    await this.channel.consume(queue, (message) => {
      callback(message);
      this.channel.ack(message);
    });
    await this.close();
  }

  async close() {
    await this.channel.close();
    await this.conn.close();
  }
}
