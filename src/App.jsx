import { useEffect, useState } from "react";
import Button, { DispalyPro } from "./components/Button";
import Profile from "./components/Profile";
import "./App.css";
import ProductList from "./components/ProductList";
import List from "./components/List";

function App() {
  const [products, setProduct] = useState([])
  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProduct(json));

  },[]);

  return (
    <>
      <h1>My reactjs App Product listing form api</h1>
      {/* <div className="gap">
        <Button />
      </div>
      <Profile />
      <DispalyPro /> */}
      {/* <ProductList  products={products}/> */}
      <List/>
    </>
  );
}

export default App;
