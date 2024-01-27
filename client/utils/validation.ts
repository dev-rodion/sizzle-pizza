export interface IValidation {
  isValid: boolean;
  message: string;
}

export const validateUsername = (username: string): IValidation => {
  const result: IValidation = { isValid: true, message: "" };

  if (!username) {
    result.isValid = false;
    result.message = "Username is required";
    return result;
  }

  if (username.length < 3) {
    result.isValid = false;
    result.message = "Username must be at least 3 characters";
    return result;
  }

  if (username.length > 20) {
    result.isValid = false;
    result.message = "Username must be at most 20 characters";
    return result;
  }

  return result;
};

export const validateEmail = (email: string): IValidation => {
  const result: IValidation = { isValid: true, message: "" };

  if (!email) {
    result.isValid = false;
    result.message = "E-mail is required";
    return result;
  }

  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/; //? RFC 5322 Official Standard
  if (!email || !emailRegex.test(email)) {
    result.isValid = false;
    result.message = "E-mail is not valid";
  }

  return result;
};

export const validatePassword = (
  password: string,
  type: "login" | "default" = "default"
): IValidation => {
  const result: IValidation = { isValid: true, message: "" };

  if (!password) {
    result.isValid = false;
    result.message = "Password is required";
    return result;
  }

  if (type === "login") {
    return result;
  }

  if (password.length < 8) {
    result.isValid = false;
    result.message = "Password must be at least 8 characters";
    return result;
  }

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,}$/; //? Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
  if (!password || !passwordRegex.test(password)) {
    result.isValid = false;
    result.message =
      "At least one uppercase letter, one lowercase letter, one number and one special character";
    return result;
  }

  return result;
};

export const validatePasswordConfirm = (
  passwordConfirm: string,
  password: string
) => {
  const result: IValidation = { isValid: true, message: "" };

  if (!passwordConfirm) {
    result.isValid = false;
    result.message = "Password confirmation is required";
    return result;
  }

  if (passwordConfirm !== password) {
    result.isValid = false;
    result.message = "Password confirmation must match password";
    return result;
  }

  return result;
};
