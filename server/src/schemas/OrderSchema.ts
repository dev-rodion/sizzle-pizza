import { Schema } from "mongoose";
import { IOrder } from "../interfaces";

const OrderSchema: Schema = new Schema<IOrder>({
  userId: { type: Schema.Types.ObjectId, required: true },
  totalPrice: { type: Number, required: true },
  deliveryAddress: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
  },
  status: { type: String, required: true },
  createdAt: { type: Date, required: true },
});

export default OrderSchema;
