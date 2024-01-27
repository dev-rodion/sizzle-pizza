import { ErrorName, ErrorNames } from "../errors/ErrorName";

export const validateEmail = (email: string): ErrorName | null => {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/; //? RFC 5322 Official Standard
    if (!email || !emailRegex.test(email)) {
        return ErrorNames.EMAIL_INVALID;
    }
    return null;
}