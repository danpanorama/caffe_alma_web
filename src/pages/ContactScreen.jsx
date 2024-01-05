
import TransitionPage from '../components/transition/TransitionPage';
import '../css/contact.css';
import Image from '../images/new/out2.jpg'

function ContactScreen() {
  return (
    <div className="App">
      <TransitionPage>
      <div className="contactPage flexRowToColRevers center">
        <div className="sideA">

        </div>
        <div className="sideB h100vh flexCol center">
          <h1 className="headerContact">קפה עלמה </h1>
          <div className="openHours flexCol center">
            <p className="pre">
              שעות פעילות
            </p>
            <p className="time ">
            ראשון עד חמישי מ 7:00-22:00 </p>
            <p className="time"> שישי מ 7:00-18:00</p>
            <p className="time">   שבת מ 8:00-22:00</p>

            <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d298.9055291570507!2d34.75774327754233!3d32.04949822195629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4cba1f10379f%3A0x6cd118432341db52!2sAlma%20Cafe!5e0!3m2!1siw!2sil!4v1682858349272!5m2!1siw!2sil" className="iframeMap"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>
            {/* <div className="imageDiv">
              <img src={Image} className='h100 w100 img' alt="" />
            </div> */}
           
          </div>

        </div>
      </div>
      </TransitionPage>
   
    </div>
  );
}

export default ContactScreen;
