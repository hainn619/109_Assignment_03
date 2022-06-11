import "./products.css";
import QuantityPicker from "./quantityPicker";
import DataService from "../services/dataService";
import { useState, useContext } from "react";
import StoreContext from "../context/storeContext";

const Product = (props) => {
  //   console.log("the value is: " + props.title);

  let [quantity, setQuantity] = useState(1);
  let addProdToCart = useContext(StoreContext).addProdToCart;

  const onQuantityChange = (value) => {
    setQuantity(value);
  };
  const getTotal = () => {
    let total = props.data.price * quantity;
    return total.toFixed(2);
  };
  const addProduct = () => {
    console.log("add Product", props.data.title);
    let prodForCart = { ...props.data, quantity: quantity };
    addProdToCart(prodForCart);
  };

  return (
    <div className="product">
      <img src={"/img/" + props.data.image}></img>
      {/* <img src="https://picsum.photos/200/300"></img> */}
      <h3>{props.data.title}</h3>
      <label>
        List Price: <span>${props.data.price}</span>
      </label>
      <label>Total: {getTotal()}</label>
      <QuantityPicker onChange={onQuantityChange}></QuantityPicker>
      <button onClick={addProduct} className="btn btn-danger btn-sm">
        Add
      </button>
    </div>
  );
};

export default Product;
