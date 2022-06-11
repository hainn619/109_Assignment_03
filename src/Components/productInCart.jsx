import "./productInCart.css";

import { useContext } from "react";
import StoreContext from "./../context/storeContext";

const ProductInCart = (c) => {
  //   const remove = useContext(StoreContext).removeProdfromCart;
  let remove = useContext(StoreContext).removeProdfromCart;
  const getTotal = () => {
    let total = c.data.price * c.data.quantity;
    return total.toFixed(2);
  };

  const productRemove = () => {
    remove(c.data._id);
  };

  return (
    <div className="product-cart">
      <img alt={c.data.title} src={"/img/" + c.data.image}></img>
      <div className="description">
        <h5>{c.data.title}</h5>
        <p>{c.data.category}</p>
      </div>
      <label className="price">${c.data.price}</label>{" "}
      <label className="quantity">{c.data.quantity}</label>
      <label className="total">${getTotal()}</label>
      <button onClick={productRemove} className="btn btn-sm btn-danger">
        Remove
      </button>
    </div>
  );
};
export default ProductInCart;
