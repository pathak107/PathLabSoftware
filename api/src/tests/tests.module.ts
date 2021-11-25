import { Module } from '@nestjs/common';
import { TestsService } from './tests.service';
import { TestsController } from './tests.controller';
import { Test, TestSchema } from './entities/test.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [TestsController],
  providers: [TestsService],
  imports: [
    MongooseModule.forFeature([{ name: Test.name, schema: TestSchema }]),
  ],
  exports: [
    TestsService,
    MongooseModule.forFeature([{ name: Test.name, schema: TestSchema }]),
  ],
})
export class TestsModule {}
