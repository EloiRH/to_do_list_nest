/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Req, Param, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './tasks.schema';

@Controller('api/tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService){}
    // @UseGuards(AuthGuard('jwt'))
    @Post()
    async getTasks(@Req() req) {
      return await this.tasksService.getTasks(req.email);
    }
    @Post(`new`)
    async postTask(@Body() task: Task) {
      return await this.tasksService.newTask(task);
    }
    @Put(`done`)
    async doneTask(@Body() task: Task) {
      return await this.tasksService.doneTask(task);
    }
    @Delete(`del`)
    async deleteTask(@Param('taskId') taskId: number) {
      return await this.tasksService.deleteTask(taskId);
    }









}
