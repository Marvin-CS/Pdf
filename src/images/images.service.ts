import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Images } from './interfaces/image.interface';
import { InjectModel } from '@nestjs/mongoose';
import { ImagesDto } from './dto/images-dto/images-dto';

@Injectable()
export class ImagesService {

    constructor( @InjectModel('Images') private ImagesModel: Model<Images>) {}

    async uploadFile(filename: ImagesDto) {
        const file = new this.ImagesModel(filename)
        return await file.save();
    }

}
