import jwt from "jsonwebtoken";
import { IUser } from "../interfaces";

const generateToken = (user: IUser): string => {
  const dataToSign: Omit<IUser, "password"> = {
    _id: user._id,
    username: user.username,
    email: user.email,
    phoneNumber: user.phoneNumber,
    address: user.address,
    avatarUrl: user.avatarUrl,
    createdAt: user.createdAt,
  };

  return jwt.sign(dataToSign, process.env.JWT_SECRET || "secret", {
    expiresIn: process.env.JWT_EXPIRES_IN || "1h",
  });
};

export default generateToken;
