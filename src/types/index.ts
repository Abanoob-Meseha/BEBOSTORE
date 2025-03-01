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
  name: string;
  img: string ;
  description : string ;
  stock : number ;
  
};
