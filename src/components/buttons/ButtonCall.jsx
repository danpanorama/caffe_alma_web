import { NavLink } from "react-router-dom";
import "../../css/buttons.css";
import { motion } from "framer-motion";

function ButtonCall(props) {
  return (
    <div className="btn">
    <button  className={"btnMenu " + props.class1}>  <a href={'tel:'+props.href}>{props.text}</a></button>

    </div>
  );
}

export default ButtonCall;
