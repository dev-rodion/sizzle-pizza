import { ErrorName, ErrorNames } from "../errors/ErrorName";

export const validatePassword = (password: string): ErrorName | null => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,}$/; //? Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
    if (!password || !passwordRegex.test(password)) {
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
