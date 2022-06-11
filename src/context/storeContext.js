import { createContext } from "react";

let StoreContext = createContext({
  cart: [],
  user: {},
  addProdToCart: () => {},
  removeProdfromCart: () => {},
});

export default StoreContext;
