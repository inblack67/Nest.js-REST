import * as mongoose from 'mongoose';
export const ItemSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    quantity: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        required: Date.now()
    },
} );