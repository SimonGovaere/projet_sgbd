import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  private logger = new Logger(AppService.name);

  constructor(private configService: ConfigService) {
    const mongoDbHost = configService.get('MONGO_DB_HOST');
    this.logger.debug(`mongoDB Host: ${mongoDbHost}`);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
