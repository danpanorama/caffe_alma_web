import { NavLink } from "react-router-dom";
import "../../css/imagesection.css";
import { motion } from "framer-motion";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Imag1 from '../../images/home1.jpg'
import Imag2 from '../../images/homesmall2.jpg'
import OptimalImage from '../optimalimage/OptimalImage'
function ImageSection() {
  
  return (
   <div className="w100 loading_image">
 <OptimalImage src={Imag1} />
    
   </div>
  );
}

export default ImageSection;
