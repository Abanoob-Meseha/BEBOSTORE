import { Order } from "@/types";
import products from "./products";

const orders: Order[] = [
  {
    id: "506070",
    status: "Placed",
    date: "12 Mar 2025",
    contact: {
      name: "Abanoub Meseha",
      phone: "+201206010738",
      email: "abanoob.meseha@gmail.com",
    },
    address: "51 Abu Dawoud El-Zahery St., off Makram Ebeid St.",
    patment: "Visa **** 4388",
    shipping_fees: 5,
    total_paid: 50,
    products: products,
  },
];

export default orders;
