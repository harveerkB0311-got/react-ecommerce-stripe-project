import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/api';

function Products({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(() => {
        setProducts([
          { id: 1, name: 'Laptop', price: 999.99, description: 'High performance laptop' },
          { id: 2, name: 'Headphones', price: 149.99, description: 'Wireless noise cancelling headphones' },
          { id: 3, name: 'Keyboard', price: 89.99, description: 'Mechanical keyboard' }
        ]);
      });
  }, []);

  return (
    <main className="container">
      <h1>Products</h1>
      <div className="grid">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h3>${Number(product.price).toFixed(2)}</h3>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Products;
