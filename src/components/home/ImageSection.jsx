import { NavLink } from "react-router-dom";
import "../../css/imagesection.css";
import { motion } from "framer-motion";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Imag1 from '../../images/home2.jpg'
import Imag4 from '../../images/home5.jpg'
import Imag2 from '../../images/homesmall2.jpg'
import OptimalImage from '../optimalimage/OptimalImage'
import { useState } from "react";
function ImageSection() {
  const [imageAnimk,setImageAnim]= useState(false)
  function LoadImage(){
    console.log('stop animation')
    setImageAnim(true)
  }
  
  return (
   <div className={imageAnimk?"w100 loading_image":"w100 loading_image animation"}>
 <OptimalImage LoadImage={LoadImage} src={Imag1} />
     
   </div>
  );
}

export default ImageSection;
