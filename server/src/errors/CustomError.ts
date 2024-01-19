import { Response } from "express";

class CustomError extends Error {
    public readonly message: string;
    public readonly statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
    }
    createError() {
        return {
            message: this.message,
            statusCode: this.statusCode,
        };
    }
    returnError(res: Response) {
        return res.status(this.statusCode).json(this.createError());
    }
}

export default CustomError;