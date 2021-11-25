import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type PatientDocument = Patient & Document;

@Schema()
export class Patient {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  age: number;

  @Prop()
  height: number; // in cms

  @Prop()
  weight: number; //in Kgs

  @Prop({ required: true })
  contact_number: string;

  @Prop()
  email: string;

  @Prop({ required: true })
  lab_id: Types.ObjectId;

  @Prop()
  otp: string;

  @Prop()
  otp_expiration: Date;

  @Prop({ default: 0 })
  balance: number;
}

export const PatientSchema = SchemaFactory.createForClass(Patient);
