import { Routes, useLocation, Route, Router } from "react-router-dom";
import Nav from "./Nav";
import '../../css/nav.css';
import {AnimatePresence} from 'framer-motion';
import HomeScreen from "../../pages/HomeScreen";
import AboutScreen from "../../pages/AboutScreen";
import ContactScreen from "../../pages/ContactScreen";

function NavRoute() {
  const location =useLocation()
  
  return (
    <div className=" " >
   
      
      <Nav  />
      
      <AnimatePresence mode="wait">
      <Routes location={location} key={location.path} >
        <Route path="/" element={<HomeScreen />} exact />
        <Route path="/*" element={<HomeScreen />} exact />
        <Route path="/about" element={<AboutScreen />} exact />
        <Route path="/contact" element={<ContactScreen />} exact />

        {/* <Routes path="/404" element={<Nofuondpage/>} exact/> */}
      </Routes>  
      </AnimatePresence>
    </div>
  );
}

export default NavRoute;
