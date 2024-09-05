import type { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import type { IAppConfiguration } from '@/config/interfaces';

import { JwtGuard } from '@/auth/guards/jwt.guard';
import { AppModule } from './app/app.module';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AllExceptionsFilter } from '@/app/all-exception.filter';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  const config = app.get(ConfigService<IAppConfiguration>);

  const corsConfig: CorsOptions = {
    origin: config.get('corsWhitelist')?.split(',') ?? [],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  };

  Logger.warn(`Application is launching with cors config`, corsConfig);

  app.enableCors(corsConfig);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  );

  app.useGlobalGuards(app.get(JwtGuard));
  app.useGlobalFilters(app.get(AllExceptionsFilter));

  const port = config.get('port', { infer: true });

  const openapiConfig = new DocumentBuilder()
    .setTitle('CompanyNameHere API')
    .addServer(`http://localhost:${port}/api`)
    .setDescription('The CompanyNameHere API description')
    .setVersion('0.1')
    .build();
  const document = SwaggerModule.createDocument(app, openapiConfig);
  SwaggerModule.setup('api', app, document);

  if (!port) throw new Error('No port has been defined!');

  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap().catch((e) => {
  console.error('Unexpected error while bootstraping application!');
  throw e;
});
