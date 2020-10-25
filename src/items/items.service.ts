import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ItemInterface } from 'src/items/interfaces/item.interface';
import { CreateItemDTO } from './dto/create-item.dto';

@Injectable()
export class ItemsService
{
    constructor (
        @InjectModel( 'Item' )
        private readonly itemModel: Model<ItemInterface>
    ) { }

    async findAll (): Promise<ItemInterface[]>
    {
        return await this.itemModel.find();
    }

    async findOne ( id: string ): Promise<ItemInterface>
    {
        return await this.itemModel.findById( { _id: id } );
    }

    async delete ( id: string ): Promise<ItemInterface>
    {
        return await this.itemModel.findByIdAndDelete( { _id: id } );
    }

    async update ( id: string, data: CreateItemDTO ): Promise<ItemInterface>
    {
        return await this.itemModel.findByIdAndUpdate( id, data, { new: true } );
    }

    async create ( data: CreateItemDTO ): Promise<ItemInterface>
    {
        return await this.itemModel.create( data );
    }
}
