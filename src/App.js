import './App.css';
import AddProduct from './AddProduct';
import ProductList from './ProductList';
import {useState} from 'react';

function App() {

  const [products, setProduct] = useState([]);

  function UpdateProductList(product) {
    setProduct(products.concat(product));
  }

  function DeleteProduct(product) {
    const productIndex = products.findIndex((prod)=>prod.id === product.id);
    if(productIndex >= 0) {
      products.splice(productIndex,1);
    }
    setProduct([...products]);
  }

  return (
    <>
      <AddProduct updateProductHandler={UpdateProductList} />
      <ProductList products={products} deleteProductHandler={DeleteProduct}/>
    </>
  );
}

export default App;
