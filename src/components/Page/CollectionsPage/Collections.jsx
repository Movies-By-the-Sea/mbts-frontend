import { mapping } from './mapping';
import { Page } from '../../common/Page';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

import './collections.css';

export default function Collections() {

  const defaultBg = {
    name    : "Browse Collection",
    bg_info : "Requiem For A Dream, Darren Arronofsky",
    bg      : "https://ik.imagekit.io/mbts/pexels-yelena-odintsova-10556717_bhw3cW4rN.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647329042970",
    subtitle: "Select an experience from below and discover more such films."
  }

    const isMobile = useMediaQuery({query:'(max-width:600px)'});
    const navigate = useNavigate();

    const openPage = (item) => (e) => {
        e.preventDefault();
        navigate(`/collections/${item.link}`);
    }

  return (
      <Page 
        img      = {defaultBg.bg}
        alt      = {defaultBg.bg}
        overflow = {true}>
          <h1>{defaultBg.name}</h1>
          <p>{defaultBg.subtitle}</p>
          <div className="collection-parent-container">
            {mapping.map((card) => {
                  return (
                    <div className="flip-card-container">
                      <Flippy 
                        flipOnHover   = {true}
                        flipDirection = "horizontal"
                        className     = "flip-card"
                        onClick       = {openPage(card)}
                      >
                        <FrontSide>
                          <img 
                            src       = {card.poster}
                            alt       = {card.name}
                            className = {isMobile ? "card-img-mob" : "flip-front"} />
                        </FrontSide>
                        <BackSide>
                          <div className="flip-back">
                            <div 
                              className = 'flip-back-heading'
                              >{card.name}</div>
                            <p>{card.subtitle}</p>
                          </div>
                        </BackSide>
                      </Flippy>
                    </div>
                  )
              })}
          </div>
      </Page>
  )
}
