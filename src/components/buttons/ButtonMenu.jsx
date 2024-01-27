import { NavLink } from "react-router-dom";
import "../../css/buttons.css";
import { motion } from "framer-motion";
import PDF from '../nav/Cafe_Alma-Menu_23x33cm.pdf'

function ButtonMenu(props) {
  return (
    <div className="btn">
    <button className={"btnMenu " +props.class1}> <a href={'/'+props.href}>{props.text}</a> </button>

    </div>
  );
}

export default ButtonMenu;
