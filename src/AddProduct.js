import React ,{useState} from 'react'


export default function AddProduct({updateProductHandler}) {

  const [productName, setProductName] = useState("");
  const [productQuantity, setProductQuantity] = useState(0);
  const [productPrice, setProductPrice] = useState(1);

  function OnProductNameChanged(event) {
    setProductName(event.target.value);
  }

  function OnProductQuantityChanged(event) {
    setProductQuantity(event.target.value);
  }

  function OnProductPriceChanged(event) {
    setProductPrice(event.target.value);
  }


  return (
      <>
      
        <h1>Add Product</h1>

        <div>
          <label>Product Name</label>
          <input type="text" value={productName} onChange={(event)=> {OnProductNameChanged(event)}} />
        </div>

        <div>
          <label>Product Price</label>
          <input type="number" value={productPrice} onChange={(event)=> {OnProductPriceChanged(event)}} />
        </div>

        <div>
          <label>Product Quantity</label>
          <input type="number" value={productQuantity} onChange={(event)=> {OnProductQuantityChanged(event)}} />
        </div>


        <button onClick={()=>{
          updateProductHandler({
            id: Math.random() + 1,
            name: productName,
            price: productPrice,
            quantity: productQuantity
          })
        }}>Add Product</button>
      
      </>

  )
}
