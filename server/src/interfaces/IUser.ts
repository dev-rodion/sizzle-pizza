
interface IUser {
    _id: number;
    username: string;
    email: string;
    password: string;
    passwordRepeat?: string;
    createdAt: Date;
    updatedAt: Date;
}

export default IUser;