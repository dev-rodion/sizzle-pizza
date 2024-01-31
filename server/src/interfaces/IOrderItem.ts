interface IOrderItem {
  _id: number;
  orderId: number;
  pizzaId: number;
  size: string;
  quantity: number;
  price: number;
}

export default IOrderItem;
