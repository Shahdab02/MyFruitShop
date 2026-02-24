// import React from 'react'
// import { useCart } from '../contexts/CartContext'

// export default function Cart(){
//   const { items, remove, clear, total } = useCart()
//   if(items.length===0) return <div className="container">Cart is empty</div>
//   return (
//     <div className="container">
//       <h3>Your Cart</h3>
//       <ul className="cart-list">
//         {items.map(i=> (
//           <li key={i.id} className="cart-item">
//             <div>{i.name} x{i.qty}</div>
//             <div>
//               <span>${(i.price*i.qty).toFixed(2)}</span>
//               <button style={{marginLeft:8}} onClick={()=>remove(i.id)}>Remove</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//       <div style={{marginTop:12}}>Total: ${total.toFixed(2)}</div>
//       <div style={{marginTop:8}}>
//         <button onClick={clear} className="button">Clear</button>
//       </div>
//     </div>
//   )
// }

import React from "react";
import { useCart } from "../contexts/CartContext";
import "./Cart.css"

export default function Cart() {
  const { items, remove, clear, total } = useCart();

  const deliveryFee = total >= 299 ? 0 : 20;
  const grandTotal = total + deliveryFee;

  if (items.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your Cart is Empty 🛒</h2>
        <p>Add some fresh fruits to get started!</p>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2 className="cart-title">Your Shopping Cart</h2>

      <div className="cart-container">
        {/* Cart Items */}
        <div className="cart-items">
          {items.map((i) => (
            <div key={i.id} className="cart-card">
              <div className="cart-info">
                <h4>{i.name}</h4>
                <p>
                  ₹{i.price} × {i.qty}
                </p>
              </div>

              <div className="cart-actions">
                <div className="item-total">
                  ₹{(i.price * i.qty).toFixed(2)}
                </div>
                <button className="remove-btn" onClick={() => remove(i.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="cart-summary">
          <h3>Order Summary</h3>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{total.toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Delivery</span>
            <span>{deliveryFee === 0 ? "Free" : `₹${deliveryFee}`}</span>
          </div>

          {deliveryFee === 0 && (
            <div className="free-delivery">🎉 You unlocked Free Delivery!</div>
          )}

          <div className="summary-total">
            <span>Total</span>
            <span>₹{grandTotal.toFixed(2)}</span>
          </div>

          <button className="checkout-btn">Proceed to Checkout</button>

          <button className="clear-btn" onClick={clear}>
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}