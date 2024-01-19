import { NextFunction, Request, Response } from "express";

const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(`${new Date().toISOString()} - ${req.method} Request to ${req.url} from ${req.ip}`);
    next();
}

export default logger;