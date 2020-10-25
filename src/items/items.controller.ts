import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ItemInterface } from 'src/interfaces/item.interface';
import { CreateItemDTO } from './dto/create-item.dto';
import { ItemsService } from './items.service';


@Controller( 'items' )
export class ItemsController
{
    constructor ( private readonly itemService: ItemsService ) { }
    @Get()
    async findAll (): Promise<ItemInterface[]>
    {
        return this.itemService.findAll();
    }

    @Get( ':id' )
    async findOne (
        @Param( 'id' ) id: string
    ): Promise<ItemInterface>
    {
        return this.itemService.findOne( id );
    }

    @Post()
    create (
        @Body()
        { name, quantity, description }: CreateItemDTO
    ): CreateItemDTO
    {
        return { name, quantity, description };
    }

    @Delete( ':id' )
    async delete (
        @Param( 'id' ) id: string
    ): Promise<ItemInterface>
    {
        return this.itemService.delete( id );
    }

    @Put( ':id' )
    async update (
        @Param( 'id' ) id: string,
        @Body() data: ItemInterface
    ): Promise<ItemInterface>
    {
    return this.itemService.update( id, data );
}

}
