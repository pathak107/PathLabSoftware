import { Injectable } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { Test, TestDocument } from './entities/test.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TestsService {
  constructor(@InjectModel(Test.name) private TestModel: Model<TestDocument>) {}

  async create(createTestDto: CreateTestDto) {
    return await new this.TestModel(createTestDto).save();
  }

  async findAll() {
    return await this.TestModel.find().exec();
  }

  async findOne(id: string) {
    return await this.TestModel.findById(id).exec();
  }

  async update(id: string, updateTestDto: UpdateTestDto) {
    return await this.TestModel.findByIdAndUpdate(id, updateTestDto).exec();
  }

  async remove(id: string) {
    return await this.TestModel.findByIdAndDelete(id);
  }
}
