import jwt from "jsonwebtoken";
import { IUser } from "../interfaces";


const generateToken = (user: IUser): string => {

    const dataToSign: Pick<IUser, '_id' | 'username' | 'email'> = {
        _id: user._id,
        username: user.username,
        email: user.email,
    };

    return jwt.sign(dataToSign, process.env.JWT_SECRET || 'secret', { expiresIn: process.env.JWT_EXPIRES_IN || '1h' })
}

export default generateToken;