import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = new Logger;
  await app.listen(3000);

  //message
  logger.log(`Server running on port ${await app.getUrl() }`);
}
bootstrap();
