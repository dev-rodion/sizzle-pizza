import { Schema } from "mongoose";
import { IOrderItem } from "../interfaces";

const OrderItemSchema: Schema = new Schema<IOrderItem>({
  orderId: { type: Schema.Types.ObjectId, required: true },
  pizzaId: { type: Schema.Types.ObjectId, required: true },
  size: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

export default OrderItemSchema;
