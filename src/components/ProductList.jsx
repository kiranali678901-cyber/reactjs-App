import React from 'react';
import Product from './Product';
import '../styles/product.css'; // import CSS file


const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(prod => (
        <Product key={prod.id} product={prod} />
      ))}
    </div>
  );
};

export default ProductList;
