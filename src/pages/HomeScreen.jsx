
import ContactComp from '../components/home/ContactComp';
import Gallery from '../components/gallery/Gallery';
import AboutSec from '../components/home/AboutSec';
import ImageSection from '../components/home/ImageSection';
import NewAbout from '../components/home/NewAbout';
import NewOpening from '../components/home/NewOpening';
import Opening from '../components/home/Opening';
import LogoComp from '../components/logo/LogoComp';
import TransitionPage from '../components/transition/TransitionPage';
import '../css/home.css';
import Logo from '../images/CafeAlma_Logo.svg'
import { motion } from "framer-motion";

function HomeScreen() {
  return (
    <div className="App ">
      <TransitionPage>
        
            <motion.img className='imageLogo flexCol center' 
        initial={{ opacity: 1 ,position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}
        animate={{ opacity: 0, }}
        exit={{ opacity: 0,display:'none' }}
        transition={{ duration: 1 ,delay: 2}}src={Logo} alt="" />

      <NewOpening/>
      <NewAbout/>

      <LogoComp/>
      <br /><br />
      <Gallery/>
     

    
      <ContactComp/>
  <ImageSection/>
       {/* <Opening/>
       <AboutSec/> */}
      </TransitionPage>
    </div>
  );
}

export default HomeScreen;
