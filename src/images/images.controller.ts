import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { fileFilter, renameImage } from './helpers/images.helpers';
import { ImagesService } from './images.service';

@Controller('images')
export class ImagesController {

    /*  @Post('upload')
     @UseInterceptors(FileInterceptor('file'))
     uploadFile(@UploadedFile() file: Express.Multer.File){
         console.log(file);
     } */


   
    constructor (private readonly ImagesService: ImagesService) {}


    @Post('upload')
    @UseInterceptors(FileInterceptor('file',{
        storage: diskStorage({
            destination: './upload',
            filename: renameImage
        }),
        fileFilter: fileFilter
    }))
    async uploadFile(@UploadedFile() file: Express.Multer.File) {
        return await this.ImagesService.uploadFile({ filename: file.filename });
    }
}
