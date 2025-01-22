import { Document, Schema } from 'mongoose';

export const OrderSchema = new Schema({
  name: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
});

export interface Order extends Document {
  _id: string;
  name: string;
};