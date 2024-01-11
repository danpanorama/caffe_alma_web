import { NavLink } from "react-router-dom";
import "../../css/nav.css";
import Logo from '../../images/CafeAlma_Logo.svg'
import { motion } from "framer-motion";
import SocialCercle from "../buttons/SocialCercle";
import { useState } from "react";
import NavPhone from "./NavPhone";
import PDF from './Cafe_Alma-Menu_23x33cm.pdf'
import PDFE from './Cafe_Alma-Menu_23x33cm-ENG2.pdf'

function Nav() {

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
    <div className={activeNavBar?"nav_bar bw":'nav_bar h20vh '}>
      <div className={" h100 marginAuto centeratphone"}>
        <div className="flexRow evenly acenter">
        <div className="logo flexRow">
          
          <motion.img
            initial={{ opacity: 0,transform:'translateY(-50px) scale(1.1)' }}
            animate={{ opacity: 1,transform:'translateY(0) scale(1)' }}
            exit={{ opacity: 1 }}
            transition={{ duration: 1 ,delay:3}}
          
          src={Logo} className="Logo" alt="" />

        
        </div>
     

        <div className="links_div displayNone drtl">
          <NavLink to="/" className={'links'}>דף הבית</NavLink>
          <a href={PDF} className={'links'}>תפריט</a>
          <a href={PDFE} className={'links'}>menu</a>

          <NavLink to="/about" className={'links'}>אודות</NavLink>
          {/* <NavLink to="/contact" className={'links'}>גלרייה </NavLink> */}
          <NavLink to="/contact" className={'links'}>צור קשר</NavLink>
        </div>
        <div className="social">
          <SocialCercle/>
        </div>
        <NavPhone/>
          </div>  
      </div>
    </div>
  );
}

export default Nav;
