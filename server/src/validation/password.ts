import { ErrorName, ErrorNames } from "../errors/ErrorName";

export const validatePassword = (password: string): ErrorName | null => {
    if (!password || password.length < 6) {
        return ErrorNames.PASSWORD_INVALID;
    }
    return null;
}

export const validatePasswordConfirm = (password: string, passwordConfirm?: string): ErrorName | null => {
    if (password !== passwordConfirm) {
        return ErrorNames.PASSWORD_CONFIRM_INVALID;
    }
    return null;
}
