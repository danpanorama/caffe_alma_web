import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import '../../css/gallery.css'
import Img1 from '../../images/1.jpg'
import Img2 from '../../images/6.jpg'
import Img3 from '../../images/boss.jpg'
import Img4 from '../../images/caspi.jpg'
import Img5 from '../../images/home1.jpg'
import Img6 from '../../images/tablealma.jpg'
import Img7 from '../../images/home4.jpg'
import Img8 from '../../images/home5.jpg'
import Img9 from '../../images/new/IMG_2488.jpg'
import Img10 from '../../images/new/IMG_2491.jpg'
import Img11 from '../../images/new/IMG_2501.jpg'
import Img12 from '../../images/new/IMG_2560.jpg'
import Img13 from '../../images/new/IMG_6583.jpg'
import Img14 from '../../images/new/IMG_6586.jpg'
import Img15 from '../../images/new/IMG_6726.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ButtonMenu from '../buttons/ButtonMenu';
import 'aos/dist/aos.css'
import AOS from "aos";
import { useEffect } from "react";
import LogoComp from '../logo/LogoComp';
export default function Gallery() {
  useEffect(()=>{
    AOS.init({duration:'1500'});
  },[])
  const itemData = [Img15,Img1,Img2,Img3,Img4,Img5,Img9,Img11,Img12,Img6,Img7,Img8,Img10, Img13,Img14]
  return (
  <div className="galleryComp whiteBg">
<LogoComp/>
   <div className="container">
     {/* sx={{ width: 500, height: 450, overflowY: 'scroll' }} */}
     <Box className='galleryOfImage'>
      <ImageList variant="masonry overY" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item}>
            <LazyLoadImage 
              // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={item}
            
              className='img'
            
              alt={item.title}
              loading="lazy"
           
            />
          </ImageListItem>
        ))}
      </ImageList>

      <div className="flexCol center">
        <ButtonMenu class1="marginTop50" text={'עוד תמונות'} scrb={''}/>
      </div>
    </Box>
   </div>
  </div>
  );
}
