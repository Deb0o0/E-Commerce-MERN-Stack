import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import {BrowserRouter as Router , Routes , Route } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state)=>state.user.currentUser)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        { user ? <Route path="/login" element={<Home />}/> : <Route path="/login" element={<Login />} user/>}
        { user ? <Route path="/register" element={<Home />}/> : <Route path="/register" element={<Register />} user/>}
      </Routes>
    </Router>
  );
};

export default App;