import { NavLink } from "react-router-dom";
import "../../css/home.css";
import { motion } from "framer-motion";
import LogoImage from '../../images/CafeAlma_Logo.svg'

function LogoComp() {
  return (
    <div className="LogoImage w100 flexCol center">
        <img src={LogoImage} className=" logosvg" alt="" />
     
         
    </div>
  );
}

export default LogoComp;
