import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ImageLoader = ({ src, alt }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setLoading(false);
  };

  const handleError = () => {
    setLoading(false);
    setError(true);
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error loading image</p>}
      <LazyLoadImage
      className='w100 maxh200'
        src={src}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        style={{ display: loading || error ? 'none' : 'block' }}
      />
    </div>
  );
};

export default ImageLoader;
