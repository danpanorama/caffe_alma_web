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
        <div className="container   flexRowToCol evenly acenter">
          <div className="flexCol ">
            <LogoComp />
            <SocialCercle />
          </div>
          <div className="linksNav displayNone h100 flexRow">
           
            
            
           {/* <div className="flexCol drtl h100 bet">
           <NavLink to="/contact" className={"linkfooter"}>
              צור קשר
            </NavLink> <a href="./Cafe_Alma-Menu_23x33cm.pdf" className={"linkfooter"}>
              תפריט
            </a>
            <NavLink to="/about" className={"linkfooter"}>
              menu
            </NavLink>
           </div>
           
            <div className="flexCol  drtl h100 bet">
            <NavLink to="/gallery" className={"linkfooter"}>
              גלרייה
            </NavLink>
             <NavLink to="/about" className={"linkfooter"}>
              אודות
            </NavLink><NavLink to="/" className={" linkfooter"}>
              דף הבית
            </NavLink> 
            </div> */}

          
          </div>
          <br />
          <div className="formDiv drtl ">
            <h4>צור קשר</h4>
          <form action="" className="form flexRow acenter evenly w100 drtl">
<ButtonMenu class1="marginTop10" text="שלח" />  <input placeholder="מייל או טלפון" type="text" className="input" />
           
          </form>
        </div>
        </div>
      
      </div>{" "}
      <div className="bottomFooter"></div>
    </div>
  );
}
