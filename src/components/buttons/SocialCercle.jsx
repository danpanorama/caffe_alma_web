import { NavLink } from "react-router-dom";
import "../../css/buttons.css";
import { motion } from "framer-motion";

function SocialCercle() {
  return (
    <div className="flexRow">
        <a href="" className="cercleSocial"><li className="fa fa-facebook"></li></a>
        <a href="" className="cercleSocial"><li className="fa fa-instagram"></li></a>
        <a href="" className="cercleSocial"><li className="fa fa-twitter"></li></a>

         
    </div>
  );
}

export default SocialCercle;
