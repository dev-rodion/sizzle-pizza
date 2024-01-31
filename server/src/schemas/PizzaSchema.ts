import { Schema } from "mongoose";
import { IPizza } from "../interfaces";

const PizzaSchema = new Schema<IPizza>({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  ingredients: [{ type: String, required: true }],
  options: [
    {
      size: { type: String, required: true },
      price: { type: Number, required: true },
    },
  ],
  imageUrl: { type: String, required: true },
});

export default PizzaSchema;
