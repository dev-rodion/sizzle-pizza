import { Schema } from "mongoose";

interface IReview {
  _id: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
  pizzaId: Schema.Types.ObjectId;
  rating: number;
  comment: string;
  createdAt: Date;
}

export default IReview;
