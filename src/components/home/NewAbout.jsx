import "../../css/home.css";
import { motion } from "framer-motion";
import Img from "../../images/new/out2small2.jpg";
import Img2 from "../../images/new/boss1.jpg";
import ButtonMenu from "../buttons/ButtonMenu";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect, useState } from "react";
import SocialCercle from "../buttons/SocialCercle";
import { LazyLoadImage } from 'react-lazy-load-image-component';

function NewAbout() {
  const [imageLoad,setImageLoad] = useState(false)
  useEffect(() => {
    AOS.init({ duration: "1500" });
  }, []);

  function handleLoading(){
    setImageLoad(true)
  }
  return (
    <div className="aboutNew flexCol greenBg cw acenter  posrel ">
   <div className=" flexCol center">
   <h1 className="cw">קצת עלינו</h1>
      <p>הזמנת שולחנות ואירועים</p>
      <br /> 
      <br />
   </div>
     <div className="">
     <div className="container flexRowToCol  ">
        <div className="imageSideAbout  posrel w50 " data-aos="fade-right">
          {/* <div  data-aos="fade-left" className="square_about_1_new displayNone"></div>
          <div data-aos="fade-right" className="square_about_2_new displayNone"></div>{" "}
          <div data-aos="fade-bottom" className="square_about_3_new displayNone"></div> */}
          <LazyLoadImage 
              // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={Img} 
            onLoad={handleLoading}
              className={imageLoad?"img zindex opacity1":'opacity0'}
             placeholderSrc={Img}
           
              alt={Img}
              loading="lazy"
            
            />  
        
        
          {/* <img src={Img} className="img zindex" alt="" /> */}
        </div>
        <div className="wordsSectionAbout  w50   zindex" data-aos="fade-left">
          <p className="wordsText">
            קפה עלמה הוא בית קפה שכונתי, ותיק ופינתי השוכן בלב יפו הקסומה.
          </p>
          <p className="textWords  ">
            מעל עשור שאנחנו מתמחים בהכנת קפה טרי ומשובח מאוד. לאוהבי המשקאות
            המיוחדים אנחנו מציעים שייקים ומיצים סחוטים וטבעיים שירעננו אתכם
            במהלך הקיץ וכן, שלל משקאות בריאות טעימים שינחמו בימי החורף הקרירים.
            <br />
            <br />
            <SocialCercle class={'cw'} />
            <div className=" flexCol center">
              <ButtonMenu href="about" class1="marginTop50" text={"קרא עוד"} scrb={""} />
            </div>
          </p>
        </div>
      </div>
     </div>
    </div>
  );
}

export default NewAbout;
