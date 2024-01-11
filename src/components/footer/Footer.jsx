import * as React from "react";
import "../../css/footer.css";
import LogoComp from "../logo/LogoComp";
import SocialCercle from "../buttons/SocialCercle";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="container   flexRow evenly acenter">
          <div className="flexCol center">
            <LogoComp />
            <SocialCercle />
          </div>
          <div className="linksNav displayNone flexRow">
           
            
            
            <NavLink to="/contact" className={"linkfooter"}>
              צור קשר
            </NavLink> <a href="./Cafe_Alma-Menu_23x33cm.pdf" className={"linkfooter"}>
              תפריט
            </a>
            <NavLink to="/about" className={"linkfooter"}>
              menu
            </NavLink>
             <NavLink to="/about" className={"linkfooter"}>
              אודות
            </NavLink><NavLink to="/" className={" linkfooter"}>
              דף הבית
            </NavLink> 

          
          </div>
        </div>
      </div>{" "}
      <div className="bottomFooter"></div>
    </div>
  );
}
