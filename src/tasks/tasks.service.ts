/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from './tasks.schema';

@Injectable()
export class TasksService {
    constructor(
        @InjectModel(Task.name) private tasksModel: Model<TaskDocument>,
    ) {}


    async getTasks(userEmail: string): Promise<any> {
        return await this.tasksModel.find({ userEmail: userEmail });
      }
    async newTask(task: Task): Promise<any> {
        return await this.tasksModel.create(task);
    }
    async doneTask(task: Task): Promise<any> {
        if (task.done = false){
            return await this.tasksModel.updateOne({ taskId: task.taskId }, {$set: {"done": true}});
        }        
        else {
            return await this.tasksModel.updateOne({ taskId: task.taskId }, {$set: {"done": false}});
        }
      }

    async deleteTask(taskId: number): Promise<any> {
        return await this.tasksModel.updateOne({ taskId: taskId });
      }

}
