import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// import Imag2 from '../../images/homesmall2.jpg'

const ImageLoader = ({ src, alt,LoadImage }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [imageLoader, setimageLoader] = useState(false);

  const handleLoad = () => {
    console.log('loaded')
    setimageLoader(true)
    LoadImage()
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
      className={imageLoader? "w100 maxh200  opacity1":'w100 maxh200 animationImage opacity0'}
        src={src}
         
        onLoad={handleLoad}
        onError={handleError}  
        
        />
    </div>
  );
};

export default ImageLoader;
