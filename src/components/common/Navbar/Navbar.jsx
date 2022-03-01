import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GrMail  } from 'react-icons/gr';
import { FiInstagram } from 'react-icons/fi';
import { useMediaQuery } from 'react-responsive';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineCloseCircle } from 'react-icons/ai';


import './navbar.css';

export default function Navbar() {

    const [closeNav, setCloseNav] = useState(true);
    const isMobile = useMediaQuery({query:'(max-width:600px)'});

  return (
      <div className='Navbar'>
          <div className="nav-header">mbts.</div>
            <div className="nav-links">
                {isMobile ? (
                    closeNav ? (<GiHamburgerMenu onClick={(e) => {
                        e.preventDefault();
                        setCloseNav(!closeNav);
                    }} />) : (
                        <div className="nav-mob-container">
                            <div className="nav-mob-container-header">
                                <AiOutlineCloseCircle onClick={(e) => {
                                    e.preventDefault();
                                    setCloseNav(!closeNav);
                                }} />
                                <h4>Movies By The Sea</h4>
                            </div>
                            <div className="nav-mob-list-items">
                                <div className="nav-mob-item">
                                    <Link to="/">Home</Link>
                                </div>
                                <div className="nav-mob-item">
                                    <Link to="/top30">Top 30</Link>
                                </div>
                                <div className="nav-mob-item">
                                    <Link to="/collections">Collections</Link>
                                </div>
                                <div className="nav-mob-item">
                                    <Link to="/about">About</Link>
                                </div>
                            </div>
                            <div className="nav-mob-footer">
                                <div className="nav-mob-footer-item">
                                    <FiInstagram className='footer-icon' />
                                    @movies.by.the.sea
                                </div>
                                <div className="nav-mob-footer-item">
                                    <GrMail className='footer-icon' />
                                    movies.by.the.sea.42@gmail.com
                                </div>
                                <div className="nav-mob-footer-item">
                                    Get in touch for poster credits
                                </div>
                            </div>
                        </div>
                    )
                ) :(
                    <>
                        <div className="nav-link-item">
                            <Link to="/">Home</Link>
                        </div>
                        <div className="nav-link-item">
                            <Link to="/top30">Top 30</Link>
                        </div>
                        <div className="nav-link-item">
                            <Link to="/collections">Collections</Link>
                        </div>
                        <div className="nav-link-item">
                            <Link to="/about">About</Link>
                        </div>
                    </>
                )}
            </div>
      </div>
  );
}
