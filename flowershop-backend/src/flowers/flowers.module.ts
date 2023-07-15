import { Module } from '@nestjs/common';
import { FlowersService } from './flowers.service';
import { FlowersController } from './flowers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Flower, FlowerSchema } from './schemas/flower.schema';

@Module({
  providers: [FlowersService],
  controllers: [FlowersController],
  imports:[
    MongooseModule.forFeature([{name: Flower.name, schema: FlowerSchema}])
  ],
})
export class FlowersModule {}
