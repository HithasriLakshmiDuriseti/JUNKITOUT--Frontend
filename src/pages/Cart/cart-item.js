import React, { useContext } from "react";
import { ShopContext } from "../shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImage} alt="img" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: {price} coins</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)} className="btn"> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)} className="btn"> + </button>
        </div>
      </div>
    </div>
  );
};