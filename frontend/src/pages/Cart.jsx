import React from 'react';
import { Link } from 'react-router-dom';

function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="container">
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-row" key={item.id}>
              <div>
                <h3>{item.name}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>${Number(item.price).toFixed(2)}</p>
              </div>
              <button className="danger" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}

          <h2>Total: ${total.toFixed(2)}</h2>
          <Link className="button-link" to="/checkout">Proceed to Checkout</Link>
        </>
      )}
    </main>
  );
}

export default Cart;
