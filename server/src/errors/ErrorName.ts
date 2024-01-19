export const ErrorNames = {
    MISSING_PARAMETERS: 'MissingParameters',
    USER_NOT_FOUND: 'UserNotFound',
    INVALID_CREDENTIALS: 'InvalidCredentials',
    ACCESS_DENIED: 'AccessDenied',
    SERVER_ERROR: 'ServerError',
    REGISTER_ERROR: 'RegisterError',
    USER_EXISTS: 'UserExists',
    PASSWORDS_DONT_MATCH: 'PasswordsDontMatch',
    INVALID_TOKEN: 'InvalidToken',
    INVALID_PASSWORD: 'InvalidPassword',
} as const;

export type ErrorName = typeof ErrorNames[keyof typeof ErrorNames];