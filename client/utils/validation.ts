import { ErrorNames } from "../constants/Errors";

export interface IValidation {
  isValid: boolean;
  message: string;
}

export const validateEmail = (email: string): IValidation => {
  const result: IValidation = { isValid: true, message: "" };

  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/; //? RFC 5322 Official Standard
  if (!email || !emailRegex.test(email)) {
    result.isValid = false;
    result.message = ErrorNames.EMAIL_INVALID;
  }

  return result;
};

export const validatePassword = (password: string): IValidation => {
  const result: IValidation = { isValid: true, message: "" };

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,}$/; //? Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
  if (!password || !passwordRegex.test(password)) {
    result.isValid = false;
    result.message = ErrorNames.PASSWORD_INVALID;
  }

  return result;
};
