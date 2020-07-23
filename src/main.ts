import { NestFactory } from '@nestjs/core';
import { TripModule } from './trip.module';

const port = Number(process.env.APP_PORT || 3000);
(async function bootstrap() {
  const app = await NestFactory.create(TripModule);
  app.enableCors();
  await app.listen(port).then(() => {
    // tslint:disable-next-line:no-console
    console.log(`Server started on http://localhost:${port}`);
  });
})();
