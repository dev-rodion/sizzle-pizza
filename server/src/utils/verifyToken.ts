import jwt from "jsonwebtoken";


const verifyToken = (token: string): boolean => {
    try {
        jwt.verify(token, process.env.JWT_SECRET || '');
        return true;
    } catch (err) {
        return false;
    }
}

export default verifyToken;