import { NavLink } from "react-router-dom";
import "../../css/about.css";
import { motion } from "framer-motion";
import LogoComp from "../logo/LogoComp";
import ButtonMenu from "../buttons/ButtonMenu";
import ButtonCall from "../buttons/ButtonCall";

function ContactComp() {
  return (
   <div className="">
     <div className="container  h100vh flexCol center drtl">
        <LogoComp/>
      <div className="flexRowToCol w100 center">
      <div className="openHours flexCol   marginLeft w50">
            <p className="pre w50 ">
              שעות פעילות
            </p>
            <p className="time ">
            ראשון עד חמישי מ 7:30-22:00 </p>
            <p className="time"> שישי מ 7:30-18:00</p>
            <p className="time">   שבת מ 8:00-22:00</p>
{/* <ButtonMenu text="צור קשר"/> */}
<ButtonCall class1="marginTop50"  text="צור קשר" href={'+972539650248'} />
   
            {/* <div className="imageDiv">
              <img src={Image} className='h100 w100 img' alt="" />
            </div> */}
           
          </div>
          <div className="map w50 ">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d298.9055291570507!2d34.75774327754233!3d32.04949822195629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4cba1f10379f%3A0x6cd118432341db52!2sAlma%20Cafe!5e0!3m2!1siw!2sil!4v1682858349272!5m2!1siw!2sil" className="iframeMap iframeMap2"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>
      </div>
         
    </div>
   </div>
  );
}

export default ContactComp;
