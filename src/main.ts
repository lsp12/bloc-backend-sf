import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 4000;
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  await app.listen(port);
  console.log(`database in ${process.env.MONGODB_URI}`);
  console.log('el servidor esta correindo en el puerto ' + port);
}
bootstrap();
