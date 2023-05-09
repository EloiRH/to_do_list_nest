import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TasksController } from './tasks/tasks.controller';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/ToDo'),
    AuthModule,
    UsersModule,
    TasksModule,
  ],
  controllers: [AppController, TasksController],
  providers: [AppService],
})
export class AppModule {}
