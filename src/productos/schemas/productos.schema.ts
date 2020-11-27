import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CatProductos = Cat & Document;
@Schema()
export class Cat {
    @Prop()
    _id: number;

    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop()
    imageURL: string;

    @Prop()
    price: number;

    @Prop()
    createDate: Date;

}

export const CatSchema = SchemaFactory.createForClass(Cat);