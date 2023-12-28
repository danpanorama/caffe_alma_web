import { NavLink } from "react-router-dom";
import "../../css/buttons.css";
import { motion } from "framer-motion";

function ButtonMenu(props) {
  return (
    <div className="btn">
    <button className="btnMenu"> {props.text}</button>

    </div>
  );
}

export default ButtonMenu;
