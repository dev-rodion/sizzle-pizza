import e, { NextFunction, Request, Response } from "express";
import { User } from "../models";
import bcrypt from 'bcryptjs';
import { CustomError, ErrorFactory } from "../errors";
import { ErrorName, ErrorNames } from "../errors/ErrorName";
import { IErrorFactory, IUser } from "../interfaces";
import generateToken from "../utils/generateToken";
import { validation } from "../validation";

const errorsFactory: IErrorFactory = new ErrorFactory();

export const registerUser = async (req: Request, res: Response) => {
    const validationError: ErrorName | null = validation.register(req.body);
    if (validationError !== null) {
        const error: CustomError = errorsFactory.createError(validationError);
        return error.returnError(res);
    }

    const userExists: boolean = await User.findOne({ email: req.body.email }) ? true : false;
    if (userExists) {
        const error: CustomError = errorsFactory.createError(ErrorNames.USER_EXISTS);
        return error.returnError(res);
    }

    if (req.body.password !== req.body.passwordRepeat) {
        const error: CustomError = errorsFactory.createError(ErrorNames.PASSWORDS_DONT_MATCH);
        return error.returnError(res);
    }

    const hashedPassword: string = await bcrypt.hash(req.body.password, 8);

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
    });

    try {
        const user: IUser = await newUser.save();
        const token = generateToken(user);
        res.status(201).json({ token });
    } catch (err) {
        const error: CustomError = errorsFactory.createError(ErrorNames.REGISTER_ERROR);
        return error.returnError(res);
    }
}

export const loginUser = async (req: Request, res: Response) => {
    const validationError: ErrorName | null = validation.login(req.body);
    if (validationError !== null) {
        const error: CustomError = errorsFactory.createError(validationError);
        return error.returnError(res);
    }

    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        const error: CustomError = errorsFactory.createError(ErrorNames.USER_NOT_FOUND);
        return error.returnError(res);
    }
    if (!(await bcrypt.compare(req.body.password, user.password))) {
        const error: CustomError = errorsFactory.createError(ErrorNames.INVALID_PASSWORD);
        return error.returnError(res);
    }

    const token: string = generateToken(user);

    res.status(200).json({ token });
}