import React from 'react'

const ViewProduct = (pro) => {
    console.log(pro.product);
    const product = pro.product
  return (
    <div className="product-card" >
        <h1>Description </h1>
      <img className="product-image" src={product?.image} alt={product?.title} />
      <h2 className="product-title">{product?.title}</h2>
      <p className="product-category">{product?.category}</p>
      <p className="product-description">{product?.description}</p>
      <div className="product-footer">
        <span className="product-price">${product?.price}</span>
        <span className="product-rating">
          ⭐ {product?.rating?.rate} ({product?.rating?.count})
        </span>
      </div>
    </div>
  )
}

export default ViewProduct
