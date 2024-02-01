import { Schema } from "mongoose";
import { IReview } from "../interfaces";

const ReviewSchema = new Schema<IReview>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  pizzaId: { type: Schema.Types.ObjectId, ref: "Pizza", required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  createdAt: { type: Date, required: true },
});

export default ReviewSchema;
