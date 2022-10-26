import React from 'react'

export default function ProductList({products,deleteProductHandler}) {
  return (
    <>
        <h1>Product List Component</h1>

        {products.map(product => (
            <React.Fragment key={product.id}>
                <h1>Product Name : {product.name}</h1>
                <h2>Product Price : {product.price}</h2>
                <p>Product Quantity : {product.quantity}</p>
                <h3>Product Total Price : {product.price * product.quantity}</h3>
                <button onClick={()=> {
                  deleteProductHandler(product);
                }}>Delete</button>
            </React.Fragment>
        ))}
    </>
  )
}
