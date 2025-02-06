import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://localhost:3001',
      'https://j7f0x0n5-3001.asse.devtunnels.ms',
      'https://73z50gs6-3001.asse.devtunnels.ms',
    ],
    credentials: true, // Allow cookies or Authorization headers
  });
  app.use(cookieParser());
  await app.listen(3000);
}
bootstrap();
