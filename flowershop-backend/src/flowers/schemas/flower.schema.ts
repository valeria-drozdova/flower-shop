import  {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

export type FlowerDocument = Flower & Document;

@Schema()
export class Flower{
    @Prop({required: true})
    title?: string;

    @Prop()
    description?: string;

    @Prop()
    price?: number;

    @Prop()
    imgUrl?: string;

    @Prop()
    completedAt?: Date;

    @Prop({ required: true })
    createdAt?: Date;

    @Prop()
    deletedAt?: Date;

}

export const FlowerSchema = SchemaFactory.createForClass(Flower);
