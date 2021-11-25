import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LabDocument = Lab & Document;

@Schema()
export class Lab {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  Address: string;

  @Prop({ required: true, unique: true })
  contact_number: string;
}

export const LabSchema = SchemaFactory.createForClass(Lab);
