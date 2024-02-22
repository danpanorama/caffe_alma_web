import * as React from "react";
import "../../css/footer.css";
import LogoComp from "../logo/LogoComp";
import SocialCercle from "../buttons/SocialCercle";
import { NavLink } from "react-router-dom";
import ButtonMenu from "../buttons/ButtonMenu";

export default function Footer() {
  return (
    <div>
      <div className="footer flexCol  center">
        <div className="container   flexRowToCol center acenter">
          <div className="flexCol ">
            <LogoComp />
            <SocialCercle />
          </div>
         
          <br />
        
        </div>
      
      </div>{" "}
      <div className="bottomFooter"></div>
    </div>
  );
}
