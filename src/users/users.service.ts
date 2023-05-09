/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './users.schema';
import * as bcrypt from 'bcrypt'


@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private usersModel: Model<UserDocument>,
  ) {}

  async newUser(user: User): Promise<any> {
    const hashedPass = bcrypt.hashSync(user.password, 10);
    user.password = hashedPass;    
    return await this.usersModel.create(user);
  }  
  async getUser(email: string): Promise<any> {
    const user = await this.usersModel.findOne({ email: email }).lean();
    return user;
  }

}
