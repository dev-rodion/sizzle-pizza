import mongoose, { Schema, Document } from 'mongoose';
import IUser from '../interfaces/IUser';
import UserSchema from '../schemas/UserSchema';

const User = mongoose.model<IUser>('User', UserSchema);

export default User;