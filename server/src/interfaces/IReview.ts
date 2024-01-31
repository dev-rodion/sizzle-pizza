interface IReview {
  _id: number;
  userId: number;
  pizzaId: number;
  rating: number;
  comment: string;
  createdAt: Date;
}

export default IReview;
