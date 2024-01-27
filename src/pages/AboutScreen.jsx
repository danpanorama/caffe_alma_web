import TransitionPage from "../components/transition/TransitionPage";
import "../css/about.css";
import Image1 from '../images/home1.jpg'
import Image2 from '../images/tablealma.jpg'
import Image3 from '../images/home4.jpg'
import Image4 from '../images/new/cup2.jpg'
import Image5 from '../images/new/out2.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ButtonMenu from "../components/buttons/ButtonMenu";
import { useEffect } from "react";
import MenuButton from "../components/buttons/MenuButton";


function AboutScreen() {
  useEffect(()=>{
window.scrollTo(0,0)
  },[])
  return (
    <div className="greenBg cw">
      <TransitionPage>
        <div className="aboutScreen">
          <br /><br /><br /><br /><br /><br />
          {/* className="flexRowToCol container h100 bet acenter" */}
          <div className=" container flexRowToCol center"> 
          <div className="  ">
          <LazyLoadImage 
              // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={Image4} className="imgabout "
              alt={Image4}
              loading="lazy"
              
            />
            </div>
            <div className="wordsSide marginLeft50 drtl flexCol center  ">
              
              <h1 className="aboutHeaderPage cw">
                קפה עלמה הוא בית קפה שכונתי, ותיק ופינתי השוכן בלב יפו הקסומה.
              </h1>
              <p className="textWordsPage ">
                מעל עשור שאנחנו מתמחים בהכנת קפה טרי ומשובח מאוד. לאוהבי המשקאות
                המיוחדים אנחנו מציעים שייקים ומיצים סחוטים וטבעיים שירעננו אתכם
                במהלך הקיץ וכן, שלל משקאות בריאות טעימים שינחמו בימי החורף
                הקרירים. התפריט העשיר והטעים שלנו מבוסס על טהרת המטבח הצמחוני –
                טבעוני ומציע מגוון מנות בריאות, טעימות ומשביעות במיוחד. המאפים
                שלנו טריים ומגיעים בכל בוקר היישר מהתנור החם, הם כוללים מגוון
                רחב של עוגות, עוגיות ומתוקים טבעוניים או ללא גלוטן. במקום תוכלו
                להנות מרכישה של שלל מוצרי קפה כמו פולים, קפסולות או טחון למקינטה
                ביתית וחליטות תה טבעיות.
              </p>
            
              <MenuButton text="תפריט"/>
            </div>








          
          







 
          </div>


          <div className="flexRowToCol center container acenter  bet">
          <div className="wordsSide   flexCol  ">
              
              <h1 className="aboutHeaderPage cw">
              Cafe Alma is a neighborhood, old and corner cafe located in the heart of magical Jaffa.              </h1>
              <p className="textWordsPageE ">For over a decade we have specialized in making fresh and very fine coffee. For drink lovers
                The special ones are we offer freshly pressed and natural smoothies and juices that will refresh you
                During the summer and yes, a variety of delicious healthy drinks that will comfort you during the winter days
                the cool ones Our rich and delicious menu is based on the purity of vegetarian cuisine -
                Vegan and offers a variety of healthy, delicious and particularly satisfying dishes. the pastries
                Ours are fresh and arrive every morning straight from the hot oven, they include a variety
                Wide range of vegan or gluten-free cakes, cookies and sweets. Instead you can
                Enjoy the purchase of a variety of coffee products such as beans, capsules or ground coffee
                Homemade and natural tea infusions.
              </p>
            
              <MenuButton text="MENU"/>
            </div>


            <div className="  ">
            <LazyLoadImage 
              // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={Image5} className="imgabout "
              alt={Image4}
              loading="lazy"
              
            />
            </div>
          </div>
          <br /><br />
        <div className="container">
        <div className="imageSide gridImage  w100">
              <img src={Image1} alt="" className="maximg" />
              <img src={Image2} alt="" className="maximg" />
              <img src={Image3} alt="" className="maximg" />

            </div>
        </div>
        </div>
      </TransitionPage>
    </div>
  );
}

export default AboutScreen;
