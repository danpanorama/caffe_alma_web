import TransitionPage from "../components/transition/TransitionPage";
import "../css/about.css";
import Image1 from '../images/home1.jpg'
import Image2 from '../images/tablealma.jpg'
import Image3 from '../images/home4.jpg'

function AboutScreen() {
  return (
    <div className="">
      <TransitionPage>
        <div className="aboutScreen">
          <div className="flexCol container h100 center">
            <div className="wordsSide drtl">
              <h1 className="aboutHeaderPage">
                קפה עלמה הוא בית קפה שכונתי, ותיק ופינתי השוכן בלב יפו הקסומה.
              </h1>
              <p className="textWordsPage">
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
            </div>

            <div className="imageSide gridImage flexRow bet w100">
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
