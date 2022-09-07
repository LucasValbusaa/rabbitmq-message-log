import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/rabbitmq/logs')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getLogs(): Promise<string> {
    return await this.appService.getLogs();
  }
}
