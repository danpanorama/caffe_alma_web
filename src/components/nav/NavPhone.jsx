import { NavLink } from "react-router-dom";
import "../../css/nav.css";
import Logo from '../../images/CafeAlma_Logo.svg'
import { motion } from "framer-motion";
import SocialCercle from "../buttons/SocialCercle";
import { useState } from "react";

function NavPhone() {

  const [activeNavBar,setActiveNav ] = useState(false)
  const changeBackground = ()=>{
      if(window.scrollY >= 80){
        setActiveNav(true)
      }
      else{
        setActiveNav(false)
      }
   }
   window.addEventListener('scroll', changeBackground)
  return (
    <div className="displayOnPhoneDisplay">
        <div className="iconOnClick">=</div>
   
    </div>
  );
}

export default NavPhone;
