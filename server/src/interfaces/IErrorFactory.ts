import { ErrorName } from "ErrorType";
import { CustomError } from "../errors/";

interface IErrorFactory {
    createError(errorName: ErrorName): CustomError;
}

export default IErrorFactory;