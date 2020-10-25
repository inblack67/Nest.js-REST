import { Document } from 'mongoose';

export interface ItemInterface extends Document
{
    id?: string,
    name: string,
    desc: string,
    qty: number,
}
