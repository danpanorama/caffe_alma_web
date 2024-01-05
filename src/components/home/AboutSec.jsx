import { NavLink } from "react-router-dom";
import "../../css/about.css";
import { motion } from "framer-motion";
import Img from "../../images/new/out2.jpg";
import Img2 from "../../images/new/boss1.jpg";

import { useEffect } from "react";
function AboutSec() {



  return (
    <div className="flexCol container  acenter aboutsec posrel">
      <h1 className="about_header" data-aos="fade-up">קצת עלינו</h1>

      <div className="flexRowToCol posrel bet margin_top_50  w100 h100 ">
        <div className="imageDivAbout  h100 w50   zindex " data-aos="fade-right">
          
          <img src={Img} alt="" className="img min_height" />
          <br /><br />
          <p className="textWords" data-aos="fade-left" >
          ביחד עם אווירה אסלית, טבעית וצבעונית תוכלו להנות מפינות ישיבה מרגיעות ומוצלות, להתפנק על כוס קפה משובח ולהתרשם מעמדת הצמחים המתחדשת שלנו בה כל הצמחים מוצעים לרכישה.
          </p>
          <p className=" wordsText">מוזמנים לעקוב אחרינו ולהיכנס לאווירה Almayafo 


          </p>
          <p className="wordsText">
ניתן לבצע משלוחים דרך WOLT ותן-ביס  .

          </p>
        </div>

        <div className="wordsSec w50 flexCol bet  ">
          {/* <h1>קפה עלמה</h1> */}
          <p className="wordsText ">
          קפה עלמה הוא בית קפה שכונתי, ותיק ופינתי השוכן בלב יפו הקסומה. 

          </p>
          <p className="textWords">
מעל עשור שאנחנו מתמחים בהכנת קפה טרי ומשובח מאוד. 
לאוהבי המשקאות המיוחדים אנחנו מציעים שייקים ומיצים סחוטים וטבעיים שירעננו אתכם במהלך הקיץ וכן, שלל משקאות בריאות טעימים שינחמו בימי החורף הקרירים.
התפריט העשיר והטעים שלנו מבוסס על טהרת המטבח הצמחוני – טבעוני ומציע מגוון מנות בריאות, טעימות ומשביעות במיוחד.
המאפים שלנו טריים ומגיעים בכל בוקר היישר מהתנור החם, הם כוללים מגוון רחב של עוגות, עוגיות ומתוקים טבעוניים או ללא גלוטן. 
במקום תוכלו להנות מרכישה של שלל מוצרי קפה כמו פולים, קפסולות או טחון למקינטה ביתית וחליטות תה טבעיות. 

          </p>
          <div className="imageDiv2 w50  zindex ">
          <img src={Img2} alt="" className="img " />
        </div>
        </div>


        <div className="square_about_1"></div>
        <div className="square_about_2"></div>{" "}
        <div className="square_about_3"></div>
      </div>
    </div>
  );
}

export default AboutSec;
