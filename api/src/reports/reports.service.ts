import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TestsService } from 'src/tests/tests.service';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { Report, ReportDocument } from './entities/report.entity';

@Injectable()
export class ReportsService {
  constructor(
    @InjectModel(Report.name) private ReportModel: Model<ReportDocument>,
    private testsService: TestsService,
  ) {}

  async create(createReportDto: CreateReportDto, lab_id: string) {
    const test = await this.testsService.findOne(createReportDto.test_id);
    const result = {};
    test.parameters.forEach((para1) => {
      result[para1] = '';
    });
    const newReport = {
      test_id: createReportDto.test_id,
      patient_id: createReportDto.patient_id,
      doctor_id: createReportDto.doctor_id,
      lab_id: lab_id,
      result: result,
      date_created: Date.now(),
    };
    return await new this.ReportModel(newReport).save();
  }

  findAll() {
    return `This action returns all reports`;
  }

  findOne(id: number) {
    return `This action returns a #${id} report`;
  }

  update(id: number, updateReportDto: UpdateReportDto) {
    return `This action updates a #${id} report`;
  }

  remove(id: number) {
    return `This action removes a #${id} report`;
  }
}
