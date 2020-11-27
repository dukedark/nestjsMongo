import { IsNotEmpty } from 'class-validator';
export class CreateProductosDTO{

    @IsNotEmpty()
    readonly _id:number;

    readonly name:string;
    
    readonly description:string;
    
    readonly imageURL:string;
    
    readonly price:number;
    
    readonly createDate: Date;
}