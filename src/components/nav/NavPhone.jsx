import { NavLink } from "react-router-dom";
import "../../css/nav.css";
import Logo from '../../images/CafeAlma_Logo.svg'
import { motion } from "framer-motion";
import SocialCercle from "../buttons/SocialCercle";
import { useState } from "react";
import LogoComp from "../logo/LogoComp";
import PDF from './Cafe_Alma-Menu_23x33cm.pdf'
import PDFE from './Cafe_Alma-Menu_23x33cm-ENG2.pdf'

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
        <div className={activeNavBar?"sideNavClose greenBg":'sideNavOpen greenBg  flexCol acenter '}>
        <div className="iconOnClickin flexCol " onClick={openNav} >
          <div className="humb bcw "></div>
        <div className="humb bcw "></div>
        <div className="humb bcw "></div>
        </div>
          <h1 className="cw">קפה עלמה</h1>
          <br /><br />
        
        <div onClick={openNav} className="  flexCol center   drtl">
          <NavLink to="/"  className={'linksphone cw'}>דף הבית</NavLink>
          <a href={PDF} className={'linksphone cw'}>תפריט</a>
          <a href={PDFE} className={'linksphone cw'}>menu</a>

          <NavLink to="/about" className={'linksphone cw'}>אודות</NavLink>
          <NavLink to="/gallery" className={'linksphone cw'}>גלריה</NavLink>
 
          <NavLink to="/contact" className={'linksphone cw'}>צור קשר</NavLink>
        </div>
        <LogoComp/>
        <br /><br /><br />
        <SocialCercle class='cw'/>
        </div>
   
    </div>
  );
}

export default NavPhone;
