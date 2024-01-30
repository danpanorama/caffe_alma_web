import "../../css/home.css";
import { motion } from "framer-motion";
import Img from '../../images/home1.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component';

function NewOpening() {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 1 }}
    transition={{ duration: 1.5 ,delay:3}}
    className="imageOpenWeb"
    >
  {/* <LazyLoadImage 
              // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={Img}
              effect="blur"
         className="img"
             placeholderSrc={Img}
              alt={Img}
              loading="lazy"
              
            
            /> */}

  
    
    </motion.div>
  );
}

export default NewOpening;
