import { Schema } from "mongoose";
import IUser from "../interfaces/IUser";

const UserSchema: Schema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  password: { type: String, required: true },
  address: {
    country: { type: String, required: true },
    city: { type: String, required: true },
    street: { type: String, required: true },
    zip: { type: String, required: true },
  },
  avatarUrl: { type: String, required: false },
  createdAt: { type: Date, required: true },
});

export default UserSchema;
