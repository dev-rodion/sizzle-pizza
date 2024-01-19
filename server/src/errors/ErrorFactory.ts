import CustomError from "./CustomError";
import IErrorFactory from "../interfaces/IErrorFactory";
import { ErrorName } from "./ErrorName";

class ErrorFactory implements IErrorFactory {
    createError(errorName: ErrorName): CustomError {
        switch (errorName) {
            case 'MissingParameters':
                return new CustomError('Missing parameters', 400);
            case 'UserNotFound':
                return new CustomError('User not found', 404);
            case 'InvalidCredentials':
                return new CustomError('Invalid credentials', 401);
            case 'AccessDenied':
                return new CustomError('Access denied', 401);
            case 'ServerError':
                return new CustomError('Server error', 500);
            case 'RegisterError':
                return new CustomError('Register error', 500);
            case 'UserExists':
                return new CustomError('User with this email exists', 400);
            case 'PasswordsDontMatch':
                return new CustomError('Passwords dont match', 400);
            case 'InvalidToken':
                return new CustomError('Invalid token', 401);
            case 'InvalidPassword':
                return new CustomError('Invalid password', 400);
            case 'UsernameInvalid':
                return new CustomError('Username invalid', 400);
            case 'EmailInvalid':
                return new CustomError('Email invalid', 400);
            case 'PasswordInvalid':
                return new CustomError('Password invalid', 400);
            case 'PasswordRepeatInvalid':
                return new CustomError('Password repeat invalid', 400);
            default:
                return new CustomError('Unknown error', 500);
        }
    }
}

export default ErrorFactory;