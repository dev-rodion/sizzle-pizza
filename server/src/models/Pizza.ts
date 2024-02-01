import mongoose from "mongoose";
import { IPizza } from "../interfaces";
import PizzaSchema from "../schemas/PizzaSchema";

const Pizza = mongoose.model<IPizza>("Pizza", PizzaSchema);

export default Pizza;
