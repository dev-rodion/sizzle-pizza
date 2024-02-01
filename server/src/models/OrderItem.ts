import mongoose from "mongoose";
import { IOrderItem } from "../interfaces";
import OrderItemSchema from "../schemas/OrderItemSchema";

const OrderItem = mongoose.model<IOrderItem>("OrderItem", OrderItemSchema);

export default OrderItem;
