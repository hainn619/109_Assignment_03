import "./cart.css";
import { useContext } from "react";
import StoreContext from "./../context/storeContext";
import { useState } from "react";
import ProductInCart from "./productInCart";

const Cart = () => {
  let cart = useContext(StoreContext).cart;
  const getTotal = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      let prod = cart[i];
      total += prod.price * prod.quantity;
    }
    return total.toFixed(2);
  };

  return (
    <div className="cart-page">
      <h1>We have {cart.length} product in your Cart</h1>
      <h2>Ready to check out</h2>
      <hr />
      <div className="parent">
        <div className="products">
          {cart.map((c) => (
            <ProductInCart key={c._id} data={c}></ProductInCart>
          ))}
        </div>
        <div className="total-panel">
          <h3>Your total: </h3>
          <h2>${getTotal()}</h2>
        </div>
      </div>
    </div>
  );
};
export default Cart;
