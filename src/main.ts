import "dotenv/config"; //! import file .ENV

import { NestFactory } from "@nestjs/core";
import { UsersModule } from "./users/users.module";
import { Logger } from "@nestjs/common";

const port = process.env.PORT; //! define PORT dari file .ENV

async function bootstrap() {
  const app = await NestFactory.create(UsersModule);
  await app.listen(port); //! Port sesuai dengan file .ENV

  Logger.log(`Running at port ${port}`, "RunningPort");
}
bootstrap();
