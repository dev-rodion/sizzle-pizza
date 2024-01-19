import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { ErrorFactory } from "../errors";
import { IErrorFactory } from "../interfaces";
import { ErrorNames } from "../errors/ErrorName";

const errorsFactory: IErrorFactory = new ErrorFactory();


const authenticate = (req: Request, res: Response, next: NextFunction) => {

    const token: string = req.header('authorization')?.split(' ')[1] || '';

    const user = jwt.verify(token, process.env.JWT_SECRET || '', (err: any, decode: any) => {
        if (err) {
            const error = errorsFactory.createError(ErrorNames.INVALID_TOKEN);
            return error.returnError(res);
        }
        console.log(decode);
        return decode;
    });
    res.header({ 'user': user });
    console.log({ 'user': user });

    next();
}

export default authenticate;