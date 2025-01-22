import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { Model, Types } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async find() {
    return await this.userModel.aggregate([
      {
        '$lookup': {
          'from': 'orders', 
          'localField': '_id', 
          'foreignField': 'userId', 
          'as': 'orders'
        },
      },
    ]);
  }

  async findById(id: string) {
    return await this.userModel.arguments([
      { 
        $match: {_id: new Types.ObjectId(id)} },
      {
       '$lookup': {
         'from': 'orders', 
         'localField': '_id', 
         'foreignField': 'userId', 
         'as': 'orders'
        }
      }
   ]);
    // return await this.userModel.findOne({ _id: id });
  }

  async create(dto) {
    return await this.userModel.create(dto);
  }

  async update(id: string, dto) {
    return await this.userModel.findByIdAndUpdate(id, dto, { new: true });
  }

  async delete(id: string) {
    return await this.userModel.findByIdAndDelete(id);
  }
}
