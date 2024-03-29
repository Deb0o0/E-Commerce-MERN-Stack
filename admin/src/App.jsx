import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {BrowserRouter as Router , Routes , Route , Outlet } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";



const Layout = () => (
  <>
    <Topbar />
    <div className="container">
      <Sidebar />
      <Outlet />
    </div>
  </>
);

function App() {
  const admin = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDUzZDYyNjQ2N2VmMDdiZDEwZTU5ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMTYyMDA2NywiZXhwIjoxNzExODc5MjY3fQ.-apJ-fOw8qDzgJ_V0XVzgFN_jX6luHqk7Idc9QCC2Nw"
  return (
    <Router>
       <Routes>
       <Route path="/login"  element={<Login />} />
       {admin && (
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/newproduct"  element={<NewProduct />} />
          </Route>
       )}
      </Routes>
    </Router>
  );
}
export default App;