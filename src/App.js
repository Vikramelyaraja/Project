import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import NoPage from "./Pages/Nopage";
import Login from "./Pages/Login";

export default function App() {

  const navigate=useNavigate;
  return (
    <BrowserRouter>
      <Routes>
           <Route path="/" element={<Login />}/>
           {/* <Route index element={<Home />} /> 
          <Route path="login" element={<Login />} /> */}
          <Route path="Blogs" index element={<Blogs />} />
          <Route path="Contact" element={<Contact/>}/>
          <Route path="*" element={<NoPage />} />
       
      </Routes>
    </BrowserRouter>
  );
}



