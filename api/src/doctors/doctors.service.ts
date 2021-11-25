import { Injectable } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { Doctor, DoctorDocument } from './entities/doctor.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DoctorsService {
  constructor(
    @InjectModel(Doctor.name) private DoctorModel: Model<DoctorDocument>,
  ) {}

  async create(createDoctorDto: CreateDoctorDto, lab_id: string) {
    createDoctorDto.lab_id = lab_id;
    const newDoctor = new this.DoctorModel(createDoctorDto);
    return await newDoctor.save();
  }

  async findAll(lab_id: string) {
    return await this.DoctorModel.find({ lab_id }).exec();
  }

  async findOne(id: number) {
    return await this.DoctorModel.findById(id).exec();
  }

  async update(id: number, updateDoctorDto: UpdateDoctorDto) {
    return await this.DoctorModel.findByIdAndUpdate(id, updateDoctorDto).exec();
  }

  async remove(id: number) {
    return await this.DoctorModel.findByIdAndDelete(id).exec();
  }
}
