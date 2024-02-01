import mongoose from "mongoose";
import { IReview } from "../interfaces";
import ReviewSchema from "../schemas/ReviewSchema";

const Review = mongoose.model<IReview>("Review", ReviewSchema);

export default Review;
