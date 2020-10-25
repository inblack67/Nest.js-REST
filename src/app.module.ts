import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module';
import { ConfigModule } from '@nestjs/config';

@Module( {
  imports: [ ItemsModule, ConfigModule.forRoot(), MongooseModule.forRoot( process.env.MONGO_URI ) ],
  controllers: [ AppController, ItemsController ],
  providers: [ AppService, ItemsService ],
} )
export class AppModule { }
