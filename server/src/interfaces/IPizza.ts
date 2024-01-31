interface IPizza {
  _id: number;
  name: string;
  description: string;
  ingredients: string[];
  options: {
    size: string;
    price: number;
  }[];
  imageUrl: string;
}

export default IPizza;
