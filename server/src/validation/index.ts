import { IUser } from "../interfaces";
import { ErrorName } from "../errors/ErrorName";
import { validateEmail } from "./email";
import { validateUsername } from "./username";
import { validatePassword, validatePasswordRepeat } from "./password";


export const validation = {
    register: (user: IUser): ErrorName | null => {
        return validateUsername(user.username)
            || validateEmail(user.email)
            || validatePassword(user.password)
            || validatePasswordRepeat(user.password, user.passwordRepeat);
    },
    login: (user: IUser): ErrorName | null => {
        return validateEmail(user.email)
            || validatePassword(user.password);
    },
}