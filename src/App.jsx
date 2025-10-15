import { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Button, { DispalyPro } from "./components/Button";

import "./App.css";

import { ToastContainer } from "react-toastify";
import ProductList from "./components/ProductList";
import List from "./components/List";

const Profile = lazy(() => import("./components/Profile"));
const UserList = lazy(() => import("./components/userList"));

function App() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);

  return (
    <>
      <h2>its header kiran dont forgot please </h2>

      <BrowserRouter>
        <header>
          <Link to="/"> Profile </Link>
          <Link to="/user-list"> userlist</Link>
        </header>
        <Suspense fallback={<div>Loading page...</div>}>
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route
              path="/product"
              element={<ProductList products={products} />}
            />
            <Route path="/list" element={<List />} />
            <Route path="/user-list" element={<UserList />} />
          </Routes>
        </Suspense>
      </BrowserRouter>

      <ToastContainer />
    </>
  );
}

export default App;
