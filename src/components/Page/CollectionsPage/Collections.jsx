import { useState } from 'react';
import { mapping } from './mapping';
import { Page } from '../../common/Page';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import ScrollBar from '../../common/ScrollBar/ScrollBar';
import './collections.css';

export default function Collections() {

  const defaultBg = {
    name    : "Browse Collection",
    bg_info : "Requiem For A Dream, Darren Arronofsky",
    bg      : "https://ik.imagekit.io/mbts/collections_ucwl3bPOi.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645937449246",
    subtitle: "Scroll or use arrow keys to select an experience from below and discover more such films."
  }

    const [bgTitle, setBgTitle]       = useState(defaultBg.name);
    const [bgSubtitle, setBgSubtitle] = useState(defaultBg.subtitle);
    const [bg, setBg]                 = useState(defaultBg.bg);
    const [bgInfo, setBgInfo]         = useState(defaultBg.bg_info)

    const isMobile = useMediaQuery({query:'(max-width:600px)'});
    const navigate = useNavigate();

    const openPage = (item) => (e) => {
        e.preventDefault();
        navigate(`/collections/${item.link}`);
    }

    const handleHover = (item) => (e) => {
      setTimeout(() => {
        e.preventDefault();
        setBgTitle(item.name);
        setBgInfo(item.bg_info);
        setBgSubtitle(item.subtitle);
        setBg(item.bg);
      }, 500);
    }

  return (
      <Page img={bg} alt={bg} info={bgInfo}>
          <h1>{bgTitle}</h1>
          <p>{bgSubtitle}</p>
          {isMobile ? (
            mapping.map((card) => {
                return (<img 
                src       = {card.poster}
                alt       = {card.name}
                key       = {card.name}
                onClick   = {openPage(card)}
                className = "card-img-mob" />)
            })
          ) : ( 
              <div className='scroll-collection-box'>
                <ScrollBar
                data      = {mapping}
                openModal = {openPage}
                className = "collection-card"
                advanced={true}
                setHover={handleHover}
                defaultState={defaultBg}
                />
              </div>
        )}
      </Page>
  )
}
