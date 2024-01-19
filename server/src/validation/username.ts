import { ErrorName, ErrorNames } from "../errors/ErrorName";

export const validateUsername = (username: string): ErrorName | null => {
    if (!username || username.length < 3 || username.length > 20) {
        return ErrorNames.USERNAME_INVALID;
    }
    return null;
}