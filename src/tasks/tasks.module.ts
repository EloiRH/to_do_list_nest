import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Task, TaskSchema } from './tasks.schema';

@Module({
  controllers: [TasksController],
  exports: [TasksService],
  providers: [TasksService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Task.name,
        schema: TaskSchema,
      },
    ]),
  ],
})
export class TasksModule {}
