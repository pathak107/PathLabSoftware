import { Module } from '@nestjs/common';
import { LabsService } from './labs.service';
import { LabsController } from './labs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Lab, LabSchema } from './entities/lab.entity';

@Module({
  controllers: [LabsController],
  providers: [LabsService],
  exports: [
    LabsService,
    MongooseModule.forFeature([{ name: Lab.name, schema: LabSchema }]),
  ],
  imports: [MongooseModule.forFeature([{ name: Lab.name, schema: LabSchema }])],
})
export class LabsModule {}
