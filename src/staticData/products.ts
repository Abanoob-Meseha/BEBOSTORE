import { Product } from "@/types";

const products: Product[] = [
    {
      id: 0,
      name: "Nike Shoes",
      offerPercentage: 10,
      priceBefore: 350,
      price: 250,
      count: 3,
      img: "/products/nike.avif",
      stock : 3

    },
    {
      id: 1,
      name: "mi active 4 airbuds",
      offerPercentage: 0,
      priceBefore: 400,
      price: 400,
      count: 3,
      img: "/products/airbuds.png",
      stock : 5
    },
    {
      id: 2,
      name: "iphone 15 pro",
      offerPercentage: 15,
      priceBefore: 4000,
      price: 3500,
      count: 1,
      img: "/products/iphone.webp",
      stock : 10

    },
  
  ];

export default products ;