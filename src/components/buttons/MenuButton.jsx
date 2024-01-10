import { NavLink } from "react-router-dom";
import "../../css/buttons.css";
import { motion } from "framer-motion";
import PDF from '../nav/Cafe_Alma-Menu_23x33cm.pdf'

function MenuButton(props) {
  return (
    <div className="btn">
    <button className="btnMenu"> <a href={PDF}>{props.text}</a> </button>

    </div>
  );
}

export default MenuButton;
