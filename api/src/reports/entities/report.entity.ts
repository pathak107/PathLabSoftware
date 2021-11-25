import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ReportDocument = Report & Document;

@Schema()
export class Report {
  @Prop({ required: true })
  test_id: Types.ObjectId;

  @Prop({ required: true })
  patient_id: Types.ObjectId;

  @Prop({ required: true })
  doctor_id: Types.ObjectId;

  @Prop({ required: true })
  lab_id: Types.ObjectId;

  @Prop({ default: false })
  completed_status: boolean;

  @Prop({ required: true, type: Object })
  result;

  @Prop({ required: true })
  date_created: Date;

  @Prop()
  feedback: string;
}

export const ReportSchema = SchemaFactory.createForClass(Report);
