import { Schema } from "mongoose";

interface IOrderItem {
  _id: number;
  orderId: Schema.Types.ObjectId;
  pizzaId: Schema.Types.ObjectId;
  size: string;
  quantity: number;
  price: number;
}

export default IOrderItem;
