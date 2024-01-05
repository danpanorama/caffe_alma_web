import { NavLink } from "react-router-dom";
import "../../css/nav.css";
import Logo from '../../images/CafeAlma_Logo.svg'
import { motion } from "framer-motion";
import SocialCercle from "../buttons/SocialCercle";
import { useState } from "react";
import LogoComp from "../logo/LogoComp";

function NavPhone() {
  const [activeNavBar,setActiveNav ] = useState(true)
  // const [activeNavBar,setActiveNav ] = useState(false)
  // const changeBackground = ()=>{
  //     if(window.scrollY >= 80){
  //       setActiveNav(true)
  //     }
  //     else{
  //       setActiveNav(false)
  //     }
  //  }
  //  window.addEventListener('scroll', changeBackground)

  function openNav(){
    setActiveNav(!activeNavBar)
  }

  return (
    <div className="displayOnPhoneDisplay  flexCol center">
        <div className="iconOnClick flexCol center" onClick={openNav} >
          <div className="humb"></div>
        <div className="humb"></div>
        <div className="humb"></div>
        </div>
        <div className={activeNavBar?"sideNavClose":'sideNavOpen flexCol acenter '}>
        <div className="iconOnClickin flexCol " onClick={openNav} >
          <div className="humb"></div>
        <div className="humb"></div>
        <div className="humb"></div>
        </div>
          <h1>קפה עלמה</h1>
          <br /><br />
        
        <div className=" flexCol center   drtl">
          <NavLink to="/" className={'linksphone'}>דף הבית</NavLink>
          <NavLink to="/about" className={'linksphone'}>תפריט</NavLink>
          <NavLink to="/about" className={'linksphone'}>menu</NavLink>

          <NavLink to="/about" className={'linksphone'}>אודות</NavLink>
          <NavLink to="/contact" className={'linksphone'}>צור קשר</NavLink>
        </div>
        <LogoComp/>
        <br /><br /><br />
        <SocialCercle/>
        </div>
   
    </div>
  );
}

export default NavPhone;
