import { DocumentBuilder } from "@nestjs/swagger";

export const swaggerOptions = new DocumentBuilder()
  .setTitle("Nest API List")
  .setDescription("API一覧を表示するやつね")
  .setVersion("1.0")
  .build();
