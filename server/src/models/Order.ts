import mongoose from "mongoose";
import { IOrder } from "../interfaces";
import OrderSchema from "../schemas/OrderSchema";

const Order = mongoose.model<IOrder>("Order", OrderSchema);

export default Order;
