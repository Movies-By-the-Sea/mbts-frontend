import { GrMail  } from 'react-icons/gr';
import { FiInstagram } from 'react-icons/fi';
import { useMediaQuery } from 'react-responsive';

import './footer.css';

export default function Footer() {

  const isMobile = useMediaQuery({query:'(max-width:600px)'});

  return isMobile ? (<></>) : (
      <div className='footer'>
          <div className="footer-item">
            <FiInstagram className='footer-icon' />
            <a href="https://www.instagram.com/movies.by.the.sea/">@movies.by.the.sea</a>
          </div>
          <div className="footer-item">
            <GrMail className='footer-icon' />
            <a href="mailto:movies.by.the.sea.42@gmail.com">movies.by.the.sea.42@gmail.com</a>
          </div>
          <div className="footer-item">
            Get in touch for poster credits
          </div>
      </div>
  );
}
