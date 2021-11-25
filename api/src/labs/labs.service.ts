import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateLabDto } from './dto/create-lab.dto';
import { UpdateLabDto } from './dto/update-lab.dto';
import { Lab, LabDocument } from './entities/lab.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import * as bcrypt from 'bcrypt';
const saltOrRounds = 10;

@Injectable()
export class LabsService {
  constructor(@InjectModel(Lab.name) private LabModel: Model<LabDocument>) {}

  async create(createLabDto: CreateLabDto) {
    const lab = await this.LabModel.findOne({ email: createLabDto.email });
    if (lab) {
      throw new BadRequestException(
        'Email or Contact number are already taken.',
      );
    }
    const hash = await bcrypt.hash(createLabDto.password, saltOrRounds);
    const newLab: CreateLabDto = {
      name: createLabDto.name,
      email: createLabDto.email,
      password: hash,
      Address: createLabDto.Address,
      contact_number: createLabDto.contact_number,
    };
    return await new this.LabModel(newLab).save();
  }

  async findAll() {
    return await this.LabModel.find().select('-password').exec();
  }

  async findOne(id: number) {
    return await this.LabModel.findById(id).exec();
  }

  async update(id: number, updateLabDto: UpdateLabDto) {
    return await this.LabModel.findByIdAndUpdate(id, updateLabDto).exec();
  }

  async remove(id: number) {
    return await this.LabModel.findByIdAndDelete(id).exec();
  }

  async findByEmail(email: string) {
    return await this.LabModel.findOne({ email }).exec();
  }
}
