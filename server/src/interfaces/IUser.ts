interface IUser {
  _id: number;
  username: string;
  email: string;
  phoneNumber: string;
  password: string;
  passwordConfirm?: string;
  address: {
    country: string;
    city: string;
    street: string;
    zip: string;
  };
  avatarUrl?: string;
  createdAt: Date;
}

export default IUser;
