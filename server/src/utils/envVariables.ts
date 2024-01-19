export const envVariables: string[] = [
    'PORT',
    'MONGO_URL',
    'MONGO_DB',
    'JWT_SECRET',
    'JWT_EXPIRES_IN',
]


export function checkEnvVariables(variables: string[]): void {
    variables.forEach(variable => {
        if (!process.env[variable]) {
            console.log('Please set environment variables');
            process.exit(1);
        }
    });
}