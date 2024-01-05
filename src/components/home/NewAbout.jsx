import "../../css/home.css";
import { motion } from "framer-motion";
import Img from "../../images/new/out2.jpg";
import Img2 from "../../images/new/boss1.jpg";
import ButtonMenu from "../buttons/ButtonMenu";
import 'aos/dist/aos.css'
import AOS from "aos";
import { useEffect } from "react";

function NewAbout() { 

  useEffect(()=>{
    AOS.init({duration:'1500'});
  },[])
  return (
   <div className="aboutNew flexCol acenter  posrel ">
        <h1 data-aos="fade-up" >קצת עלינו</h1>
       <br /><br />
    <div className="container flexRowToCol">
    
        <div className="imageSideAbout  posrel w50" data-aos="fade-right" >
        <div className="square_about_1_new"></div>
            <div className="square_about_2_new"></div>{" "}
            <div className="square_about_3_new"></div>
            
            <img src={Img} className="img zindex" alt="" />
           

        </div>
        <div className="wordsSectionAbout  w50   zindex" data-aos="fade-left" >
            
        <p className="wordsText">
          קפה עלמה הוא בית קפה שכונתי, ותיק ופינתי השוכן בלב יפו הקסומה. 

          </p>
            <p className="textWords padd ">
                
מעל עשור שאנחנו מתמחים בהכנת קפה טרי ומשובח מאוד. 
לאוהבי המשקאות המיוחדים אנחנו מציעים שייקים ומיצים סחוטים וטבעיים שירעננו אתכם במהלך הקיץ וכן, שלל משקאות בריאות טעימים שינחמו בימי החורף הקרירים.
התפריט העשיר והטעים שלנו מבוסס על טהרת המטבח הצמחוני – טבעוני ומציע מגוון מנות בריאות, טעימות ומשביעות במיוחד.
המאפים שלנו טריים ומגיעים בכל בוקר היישר מהתנור החם, הם כוללים מגוון רחב של עוגות, עוגיות ומתוקים טבעוניים או ללא גלוטן. 
במקום תוכלו להנות מרכישה של שלל מוצרי קפה כמו פולים, קפסולות או טחון למקינטה ביתית וחליטות תה טבעיות. 
<br />
<div className=" flexCol center">
           <ButtonMenu text={"תפריט"} scrb={''} />
           </div>
            </p>
        
        </div>

    
    </div>
   
   </div>
  );
}

export default NewAbout;
