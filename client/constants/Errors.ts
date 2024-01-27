export const ErrorNames = {
  EMAIL_INVALID: "E-mail is invalid",
  PASSWORD_INVALID: "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number and one special character",
  PASSWORD_REPEAT_INVALID: "PasswordRepeatInvalid",
} as const;

export type ErrorName = (typeof ErrorNames)[keyof typeof ErrorNames];
