import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Report, ReportSchema } from './entities/report.entity';
import { TestsModule } from 'src/tests/tests.module';
import { TestsService } from 'src/tests/tests.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Report.name, schema: ReportSchema }]),
    TestsModule,
  ],
  controllers: [ReportsController],
  providers: [ReportsService, TestsService],
})
export class ReportsModule {}
