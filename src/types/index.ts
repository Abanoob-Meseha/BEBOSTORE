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
  id: number;
  name: string;
  price: number;
  offerPercentage: number;
  priceBefore: number;
  count: number;
  img: string;
  stock: number;
  rating: number;
};

export type Category = {
  name: string;
  img: string;
  imgTitle: string;
};

export type Order = {
  id: string;
  status: "Placed" | "Shipped" | "Delivered";
  date: string;
  contact: {
    name: string;
    phone: string;
    email: string;
  };
  address: string;
  patment: string;
  shipping_fees: number;
  total_paid: number;
  products: Product[];
};
