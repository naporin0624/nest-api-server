import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://130.153.120.99/mimamori', {
    user: 'numalab',
    pass: 'Numa0Lab',
    dbName: 'mimamori',
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
