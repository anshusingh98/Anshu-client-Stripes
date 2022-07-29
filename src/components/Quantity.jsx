import React from "react";
import { decreaseCount, increaseCount } from "../redux/Action";
import Buybutton from "./Buybutton";
import { useSelector, useDispatch } from "react-redux/es/exports";
import Product from "./Product";
import image from "../assets/logo.png";
import BlackNav from "./blackNav/BlackNav";
import OptionNav from "./optionNav/OptionNav";
import IncDec from "./IncDec";
import About from "./About";
import "./quantity.css"

const Quantity = () => {
    const dispatch = useDispatch();
  const quantity = useSelector((state) => state.quantity);
  const { product_name, title, desc, sku, Imgs, price } = Product;

  const ProductDetails = {
    product_name: Product?.product_name,
    quantity: quantity,
    price: Product?.price,
    Imgs: Product?.Imgs[0],
  };
  return (
    <div className="options-container">
    <p className="price-section" style={{ marginTop: "2vh" }}>
      price
    </p>
    <p className="price" style={{ marginTop: "2vh" }}>
      <span>
        <strong>
          <span>&#8377;</span>
          {quantity ? Product.price * quantity : Product.price}
        </strong>
      </span>
    </p>
    <div className="counter" style={{ marginTop: "2vh" }}>
      <p
        className="quantity"
        style={{ paddingTop: "2px", fontSize: "12px" ,marginLeft:"10px"}}
      >
        {quantity}
      </p>
      <IncDec />
      <Buybutton ProductDetails={ProductDetails} />
    </div>
  </div>
  )
}

export default Quantity