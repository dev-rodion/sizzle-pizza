
interface IUser {
    _id: number;
    username: string;
    email: string;
    password: string;
    passwordConfirm?: string;
    createdAt: Date;
    updatedAt: Date;
}

export default IUser;