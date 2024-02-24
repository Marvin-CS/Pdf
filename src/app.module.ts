import { Module } from "@nestjs/common";
import { ImagesModule } from './images/images.module';
import { MongooseModule } from "@nestjs/mongoose";


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/images'),
    ImagesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
