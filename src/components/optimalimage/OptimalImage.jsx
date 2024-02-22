import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Imag2 from '../../images/homesmall2.jpg'

const ImageLoader = ({ src, alt }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
 
  const handleLoad = () => {
    console.log('loaded')
    setLoading(false);
  };
  

  const handleError = () => {
    setLoading(false);
    setError(true);
  };

  return (
    <div>
      {loading && <div className='imageEnd'></div>}
      {error && <p>Error loading image</p>}
      <LazyLoadImage
      className='w100 maxh200'
        src={Imag2}
        
        onLoad={handleLoad}
        onError={handleError}  
        
        />
    </div>
  );
};

export default ImageLoader;
