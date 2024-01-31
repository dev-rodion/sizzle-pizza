import { Schema } from "mongoose";
import { IOrderItem } from "../interfaces";

const OrderItemSchema: Schema = new Schema<IOrderItem>({
  orderId: { type: Number, required: true },
  pizzaId: { type: Number, required: true },
  size: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

export default OrderItemSchema;
