import { LazyLoadImage } from 'react-lazy-load-image-component';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useEffect } from 'react';
const GalleryScreen = () => {
  const importAll = (context) => context.keys().map(context);
  const images = importAll(require.context('../images/new', false, /\.(png|jpe?g|svg)$/));
  useEffect(()=>{
    window.scrollTo(0,0)
      },[])
  return (
    <div className='container marginTop150'>

      {/* {images.map((image, index) => (
        <img key={index} src={image.default} alt={`image-${index}`} />
      ))} */}

<Box className='galleryOfImage'>
      <ImageList variant="masonry overY cols" cols={3} gap={8}>
        {images.map((image, index) => (
          <ImageListItem key={image}>
            <LazyLoadImage 
              // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={image}
             
              // placeholderSrc={image}
              // effect='blur'
              className='img'
              alt={image.title}
              loading="lazy"
              
            />
          </ImageListItem>
        ))}
      </ImageList>


    </Box>

    </div>
  );
};

export default GalleryScreen;