interface IUser {
  _id: number;
  username: string;
  email: string;
  phoneNumber: string;
  password: string;
  passwordConfirm?: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  avatarUrl?: string;
  createdAt: Date;
}

export default IUser;
