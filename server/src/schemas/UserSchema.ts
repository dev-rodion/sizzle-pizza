import { Schema } from "mongoose";
import IUser from "../interfaces/IUser";

const UserSchema: Schema = new Schema<IUser>({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true }
});

export default UserSchema;