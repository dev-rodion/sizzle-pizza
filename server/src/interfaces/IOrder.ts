interface IOrder {
  _id: number;
  userId: number;
  totalPrice: number;
  deliveryAddress: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  status: string;
  createdAt: Date;
}

export default IOrder;
