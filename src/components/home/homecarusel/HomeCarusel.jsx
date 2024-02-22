
import '../../../css/home.css'; // Import the CSS file for styling
import Img1 from '../../../images/new/dog.jpg'
import Img2 from '../../../images/new/out2.jpg'
import Img3 from '../../../images/new/in2.jpg'
import React, { useState, useEffect } from 'react';
import '../../../css/home.css'; // Import the CSS file for styling
import { motion } from "framer-motion";

const ImageGallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [Img1, Img2, Img3]; // Add more image URLs as needed

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Change the interval value (in milliseconds) for slideshow speed

    return () => clearInterval(interval);
  }, [images.length]);

  return (  
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 1 }}
    transition={{ duration: 1.5 ,delay:3}}
    className="imageOpenWeb posrel"
    >
    <div className="image-gallery">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index}`}
          className={index === currentImageIndex ? 'active' : ''}
        />
      ))}
    </div>
    </motion.div>
  );
};

export default ImageGallery;