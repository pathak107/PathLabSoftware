import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient, PatientDocument } from './entities/patient.entity';

@Injectable()
export class PatientsService {
  constructor(
    @InjectModel(Patient.name) private PatientModel: Model<PatientDocument>,
  ) {}

  async create(createPatientDto: CreatePatientDto, lab_id: string) {
    const newPatient = { lab_id: lab_id, ...CreatePatientDto };
    return await new this.PatientModel(newPatient);
  }

  async findAll() {
    return await this.PatientModel.find();
  }

  async findOne(id: string) {
    return await this.PatientModel.findById(id);
  }

  async update(id: string, updatePatientDto: UpdatePatientDto) {
    return await this.PatientModel.findByIdAndUpdate(id, updatePatientDto);
  }

  async remove(id: string) {
    return await this.PatientModel.findByIdAndRemove(id);
  }
}
