/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema()
export class Task {
  @Prop()
  userEmail: string;

  @Prop()
  taskId: string;

  @Prop()
  title: string;

  @Prop()
  done: boolean;
}
export const TaskSchema = SchemaFactory.createForClass(Task);
