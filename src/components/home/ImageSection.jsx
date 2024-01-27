import { NavLink } from "react-router-dom";
import "../../css/imagesection.css";
import { motion } from "framer-motion";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Imag1 from '../../images/new/cup2.jpg'
import Imag2 from '../../images/new/IMG_2487.jpg'
function ImageSection() {
  return (
   <div>
     <div className="">
     <LazyLoadImage 
              // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={Imag1}
              effect="blur"
              className='img imagSec'
            
              alt={Imag1}
              loading="lazy"
              
            />
      
      </div> 
      <div className="">
      <LazyLoadImage 
              // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={Imag2}
              effect="blur"
              className='img imagSec'
             
              alt={Imag2}
              loading="lazy"
              
            />
      </div> 
   </div>
  );
}

export default ImageSection;
