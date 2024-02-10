import React from 'react';
import './ProductDisplay.css';

const ProductDisplay = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Hoodie', price: 10, imageUrl: 'hoodie.png' },
    { id: 2, name: 'T-Shirt', price: 15, imageUrl: 'tee.png' },
   { id: 3, name: 'shoes', price: 150, imageUrl: 'https://png.pngtree.com/png-vector/20201128/ourmid/pngtree-casual-shoes-png-image_2394294.jpg' },
   { id: 4, name: 'sneakers', price: 5, imageUrl: 'https://img.freepik.com/premium-photo/sneakers-isolated-white-background_743855-44391.jpg?w=740' },
   { id: 1, name: ' fashion shoes', price: 10, imageUrl: 'https://img.freepik.com/free-photo/fashion-shoes-sneaker_1203-8066.jpg?size=626&ext=jpg&ga=GA1.1.1821065271.1707553499&semt=ais' },
   { id: 4, name: 'sneakers', price: 5, imageUrl: 'https://img.freepik.com/premium-photo/sneakers-isolated-white-background_743855-44391.jpg?w=740' },
   { id: 4, name: 'sneakers', price: 5, imageUrl: 'https://img.freepik.com/premium-photo/sneakers-isolated-white-background_743855-44391.jpg?w=740' },
   { id: 4, name: 'sneakers', price: 5, imageUrl: 'https://img.freepik.com/premium-photo/sneakers-isolated-white-background_743855-44391.jpg?w=740' },
   { id: 4, name: 'sneakers', price: 5, imageUrl: 'https://img.freepik.com/premium-photo/sneakers-isolated-white-background_743855-44391.jpg?w=740' },
   { id: 4, name: 'sneakers', price: 5, imageUrl: 'https://img.freepik.com/premium-photo/sneakers-isolated-white-background_743855-44391.jpg?w=740' },
   { id: 4, name: 'sneakers', price: 5, imageUrl: 'https://img.freepik.com/premium-photo/sneakers-isolated-white-background_743855-44391.jpg?w=740' },
   { id: 4, name: 'sneakers', price: 5, imageUrl: 'https://img.freepik.com/premium-photo/sneakers-isolated-white-background_743855-44391.jpg?w=740' },
   { id: 4, name: 'sneakers', price: 5, imageUrl: 'https://img.freepik.com/premium-photo/sneakers-isolated-white-background_743855-44391.jpg?w=740' },
   { id: 4, name: 'sneakers', price: 5, imageUrl: 'https://img.freepik.com/premium-photo/sneakers-isolated-white-background_743855-44391.jpg?w=740' },
   { id: 4, name: 'sneakers', price: 5, imageUrl: 'https://img.freepik.com/premium-photo/sneakers-isolated-white-background_743855-44391.jpg?w=740' },
   { id: 4, name: 'sneakers', price: 5, imageUrl: 'https://img.freepik.com/premium-photo/sneakers-isolated-white-background_743855-44391.jpg?w=740' },
   { id: 4, name: 'sneakers', price: 5, imageUrl: 'https://img.freepik.com/premium-photo/sneakers-isolated-white-background_743855-44391.jpg?w=740' },
   { id: 4, name: 'sneakers', price: 5, imageUrl: 'https://img.freepik.com/premium-photo/sneakers-isolated-white-background_743855-44391.jpg?w=740' },
   { id: 4, name: 'sneakers', price: 5, imageUrl: 'https://img.freepik.com/premium-photo/sneakers-isolated-white-background_743855-44391.jpg?w=740' },
  ];

  return (
    <div className="ProductDisplay">
      {products.map((product) => (
        <div key={product.id} className="ProductItem">
          <img src={product.imageUrl} alt={product.name} />
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
      );
};

export default ProductDisplay;
