import { IUser } from "../interfaces";
import { ErrorName } from "../errors/ErrorName";
import { validateEmail } from "./email";
import { validateUsername } from "./username";
import { validatePassword, validatePasswordConfirm } from "./password";


export const validation = {
    register: (user: IUser): ErrorName | null => {
        return validateUsername(user.username)
            || validateEmail(user.email)
            || validatePassword(user.password)
            || validatePasswordConfirm(user.password, user.passwordConfirm);
    },
    login: (user: IUser): ErrorName | null => {
        return validateEmail(user.email)
            || validatePassword(user.password);
    },
}