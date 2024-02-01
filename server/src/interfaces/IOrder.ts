import { Types } from "mongoose";

interface IOrder {
  _id: number;
  userId: Types.ObjectId;
  totalPrice: number;
  deliveryAddress: {
    street: string;
    city: string;
    zip: string;
  };
  status: string;
  createdAt: Date;
}

export default IOrder;
