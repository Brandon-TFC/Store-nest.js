import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //Elimina los cambios extras
      forbidNonWhitelisted: true, //Coloca que hay un problema al enviar un atributo que no es valido
    }),
  );
  await app.listen(3000);
}
bootstrap();
