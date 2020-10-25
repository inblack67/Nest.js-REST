import * as mongoose from 'mongoose';
export const ItemSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
    },
    qty: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        required: Date.now()
    },
} );