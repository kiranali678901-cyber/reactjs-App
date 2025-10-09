import { useEffect, useState } from "react";
// import Button, { DispalyPro } from "./components/Button";
// import Profile from "./components/Profile";
import "./App.css";
import UserList from "./components/userList";
// import ProductList from "./components/ProductList";
// import List from "./components/List";

function App() {
  // const [products, setProduct] = useState([])
  
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((json) => setProduct(json));

  // },[]);

  return (
    <>
      <h2>User data from API</h2>
      {/* <div className="gap">
        <Button />
      </div>
      <Profile />
      <DispalyPro /> */}
      {/* <ProductList  products={products}/> */}
      {/* <List/> */}
      <UserList/>
    </>
  );
}

export default App;
