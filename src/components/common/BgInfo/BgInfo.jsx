import { BsFillCameraReelsFill } from 'react-icons/bs';
import { useMediaQuery } from 'react-responsive'

import './bgInfo.css';

export default function BgInfo({info}) {

  const isMobile = useMediaQuery({query:'(max-width:600px)'});

  return isMobile ? (<></>) : (
      <div className='bgInfo'>
          <BsFillCameraReelsFill className='bgInfo-icon' />
          {info}
      </div>
  );
}
