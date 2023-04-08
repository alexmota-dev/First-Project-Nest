import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true, //não aceita requisições com informações não esperadas
      transform: true, //tipagem com dto
    }),
  );
  await app.listen(3000);
}
bootstrap();
