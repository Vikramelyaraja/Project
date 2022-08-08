import { Outlet, Link } from "react-router-dom";
import './App.css';

const Layout = () => {
  return (
    <>
      
        <div className="layout">
            <div className="App1">
            <Link to="/">Home</Link>
            </div>
            <div className="App2">
            <Link to="/blogs">Blogs</Link>
            </div>
            <div className="App2">
            <Link to="/Login">Login</Link>
            </div>
            <div className="App3">
            <Link to="/contact">Contact</Link>
            </div>
          </div>

      <Outlet/>
    </>
  )
};

export default Layout;
