export type TaskType = {
  title: string;
  due: string;
  assignedTo: string;
  description?: string;
};

export type FeatureType = {
  src: string;
  title: string;
};

export type ReviewType = {
  img: string;
  name: string;
  review: string;
  rating: number;
};
export enum modalItem {
  cart = "cart",
  signup = "signup",
  login = "login",
}

export type Product = {
  id : number ;
  name: string;
  price: number;
  offerPercentage: number;
  priceBefore: number;
  count: number;
  img: string;
  stock : number ;
}
