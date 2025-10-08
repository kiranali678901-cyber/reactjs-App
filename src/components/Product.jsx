import React, {useState} from "react";

import "../styles/product.css";
import ViewProduct from "./viewProduct";

const Product = ({ product }) => {
    const [pro , setPro] = useState()
  function ViewPro(id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setPro(json));
     };
  return (
    <>
    <div className="product-card" onClick={()=>ViewPro(product.id)}>
      <img className="product-image" src={product.image} alt={product.title} />
      <h2 className="product-title">{product.title}</h2>
      <p className="product-category">{product.category}</p>
      <p className="product-description">{product.description}</p>
      <div className="product-footer">
        <span className="product-price">${product.price}</span>
        <span className="product-rating">
          ⭐ {product.rating.rate} ({product.rating.count})
        </span>
      </div>
    </div>
   {pro &&  <ViewProduct  product = {pro}/>}
    </>
  );
};

export default Product;
