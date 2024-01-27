import { NavLink } from "react-router-dom";
import "../../css/buttons.css";
import { motion } from "framer-motion";

function SocialCercle(props) {
  return (
    <div className={"flexRow " }>
        <a href="" className={"cercleSocial flexCol center "+ props.class}><li className="fa fa-facebook"></li></a>
        <a href="" className={"cercleSocial flexCol center "+ props.class}><li className="fa fa-instagram"></li></a>
        <a href="" className={"cercleSocial flexCol center "+ props.class}><li className="fa fa-twitter"></li></a>

        <a href="" className={"cercleSocial flexCol center "+ props.class}><li className="fa fa-whatsapp"></li></a>

    </div>
  );
}

export default SocialCercle;
