import { Document } from 'mongoose';

export interface ItemInterface extends Document
{
    id?: string,
    name: string,
    description?: string,
    quantitiy: number,
    createdAt?: string;
}
