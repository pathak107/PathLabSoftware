import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type DoctorDocument = Doctor & Document;

@Schema()
export class Doctor {
  @Prop({ required: true })
  name: string;

  @Prop()
  age: number;

  @Prop({ required: true })
  phone_number: string;

  @Prop({ required: true })
  country_code: number;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  lab_id: Types.ObjectId;

  @Prop()
  address: string;

  @Prop({ required: true })
  field: string;

  @Prop({ required: true })
  degree: string;
}

export const DoctorSchema = SchemaFactory.createForClass(Doctor);
