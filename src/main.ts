import { NestFactory } from '@nestjs/core';
import { AppModule } from './forms.module';

async function bootstrap() {
  const port = 3000;
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors();
  await app.listen(process.env.PORT || port);
  console.clear();
  console.log(`listening on ${port} :)`);
}
bootstrap();
