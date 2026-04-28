import React from 'react';
import { createCheckoutSession } from '../services/api';

function Checkout({ cart }) {
  const handleCheckout = async () => {
    try {
      const data = await createCheckoutSession(cart);
      window.location.href = data.url;
    } catch (error) {
      alert('Stripe checkout could not start. Please check backend server and Stripe key.');
    }
  };

  return (
    <main className="container">
      <h1>Checkout</h1>
      <p>Review your order and continue to secure Stripe payment.</p>
      <button onClick={handleCheckout} disabled={cart.length === 0}>
        Pay with Stripe
      </button>
    </main>
  );
}

export default Checkout;
