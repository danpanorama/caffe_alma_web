import { NavLink } from "react-router-dom";
import "../../css/nav.css";
import Logo from '../../images/CafeAlma_Logo.svg'
import { motion } from "framer-motion";
import SocialCercle from "../buttons/SocialCercle";

function Nav() {
  return (
    <div className="nav_bar">
      <div className="container h100 marginAuto centeratphone">
        <div className="flexRow bet acenter">
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
          <NavLink to="/about" className={'links'}>תפריט</NavLink>
          <NavLink to="/about" className={'links'}>menu</NavLink>

          <NavLink to="/about" className={'links'}>אודות</NavLink>
          <NavLink to="/contact" className={'links'}>צור קשר</NavLink>
        </div>
        <div className="social">
          <SocialCercle/>
        </div>
          
          </div>  
      </div>
    </div>
  );
}

export default Nav;
