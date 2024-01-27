import React, { useContext } from 'react';
import { ShopContext } from '../shop-context';

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const context = useContext(ShopContext);

  if (!context) {
    // Handle the case when the context is null
    console.error('ShopContext is null');
    return null; // or handle it in some other way
  }

  const { addToCart, cartItems } = context;
  const cartItemAmount = cartItems[id];

  return (
    <div className='product'>
      <img src={productImage} alt={productName} />
      <div className='description'>
        <p>
          <b>{productName}</b>
        </p>
        <p> {price} coins</p>
      </div>
      <button className='addToCartBttn' onClick={() => addToCart(id)}>
        Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
      </button>
    </div>
  );
};


