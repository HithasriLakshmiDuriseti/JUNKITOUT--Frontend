import React, { useContext } from "react";
import { ShopContext } from "../shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  // Create an array of CartItem components
  const cartItemsComponents = PRODUCTS.map((product) => {
    if (cartItems[product.id] !== 0) {
      return <CartItem data={product} key={product.id} />;
    }
    return null;
  });


  return (
      <div className="cart">
        <div>
          <h1>Your Cart Items</h1>
        </div>
        <div className="cart">{cartItemsComponents}</div>

        {totalAmount > 0 ? (
          <div className="checkout">
            <p> Subtotal: {totalAmount} coins</p>
            <button onClick={() => navigate("/products")} className="btns">
              Continue Shopping
            </button>
            <button
             onClick={() => navigate("/check")}
              className="btns"
            >
              Checkout
            </button>
          </div>
        ) : (
          <h1> Your Shopping Cart is Empty</h1>
        )}

      </div>

  );
};
