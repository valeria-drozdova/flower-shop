import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFlowerDto } from './dto/create-flower.dto';
import { UpdateFlowerDto } from './dto/update-flower.dto';
import { Flower, FlowerDocument } from './schemas/flower.schema'

@Injectable()
export class FlowersService {
    constructor(@InjectModel(Flower.name) private readonly model:Model<FlowerDocument>){}

    async findAll(): Promise<Flower[]>{
        return await this.model.find().exec();
    }

    async findOne(id: string): Promise<Flower>{
        return await this.model.findById(id).exec();

    }

    async create(createFlowerDto: CreateFlowerDto): Promise<Flower> {
        return await new this.model({
          ...createFlowerDto,
          createdAt: new Date(),
        }).save();
      }

    async update(id: string, updateFlowerDto: UpdateFlowerDto): Promise<Flower>{
        return await this.model.findByIdAndUpdate(id, updateFlowerDto).exec();
    }

    async delete(id: string): Promise<Flower>{
        return await this.model.findByIdAndDelete(id).exec();
    }
}
