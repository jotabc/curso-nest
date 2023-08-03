import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // esto hace que no puedan enviar un campo que no exista en nuestro DB, automaticamente lo elimina.
      whitelist: true,
      // este forbidNonWhitelisted si queremos activarla, lo que hace es tirar un error de la propiedad que no existe en el schema.
      forbidNonWhitelisted: true,
      transform: true, // nos sirve para trasnforma la data automaticamente.
    }),
  );
  await app.listen(process.env.PORT || 8080);
}

bootstrap();
