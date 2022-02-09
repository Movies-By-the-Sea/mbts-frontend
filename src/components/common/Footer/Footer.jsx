import { useMediaQuery } from 'react-responsive';
import { FiInstagram } from 'react-icons/fi';
import { GrMail  } from 'react-icons/gr';

import './footer.css';

export default function Footer() {

  const isMobile = useMediaQuery({query:'(max-width:600px)'});

  return isMobile ? (<></>) : (
      <div className='footer'>
          <div className="footer-item">
            <FiInstagram className='footer-icon' />
            @movies.by.the.sea
          </div>
          <div className="footer-item">
            <GrMail className='footer-icon' />
            movies.by.the.sea.42@gmail.com
          </div>
          <div className="footer-item">
            Get in touch for poster credits
          </div>
      </div>
  );
}
