import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';

import { Page } from '../../common/Page';
import { callAPI } from '../../../services/MovieService';

import Modal from '../../common/Modal/Modal';
import Loading from '../../LoadingScreen/LoadingScreen';

import './landingPage.css';

export default function LandingPage() {

  const [latestFilm, setLatestFilm] = useState();
  const [loading, setLoading]       = useState(true);
  const [modal, setModal]           = useState(false);

  const isMobile = useMediaQuery({query:'(max-width:600px)'});
  const img      = "https://ik.imagekit.io/mbts/landing_page_UbSj4_6Ut.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1645937449100";

  const closeModal = () => {
    if(modal){
      document.querySelectorAll('.Page').forEach(function(m) {
        m.style.opacity = "1";
      });
      setModal(false);
    }
  }

  const openModal = (e) => {
    e.preventDefault();
    document.querySelectorAll('.Page').forEach(function(m) {
      m.style.opacity = "0.8";
    });
    setModal(true);
  }

  useEffect(() => {
    callAPI('motd')
    .then((res) => {
      setLatestFilm(res[0]);
      setLoading(false);
    })
  }, []);


  return loading ? (<Loading />) : (
    <>
    <Page img={img} alt={latestFilm.poster} info="Portrait of a Lady on Fire, Seline Sciamma">
      <div className="cw-container">
        <div className="cw-latest">
          <div className='cw-text'>Movie of the Day</div>
          <div className="cw-latest-container">
            {isMobile ? (<></>) : <img src={latestFilm.poster} alt="" className="cw-img" />}
            <div className="cw-info">
              <div className='cw-movie-heading'>{latestFilm.name}</div>
              {isMobile ? (
                <>
                  <h3>by {latestFilm.director}</h3>
                </>
              ) : (
                <>
                  <p>MBTS Rating : {latestFilm.ratings.overall} / 5</p>
                  <p>Latest film to grace the lounges of MBTS is the {latestFilm.genre.map(i => i.name + ', ')} movie by acclaimed director {latestFilm.director}. Starring {latestFilm.actors.map(i => i.name + ', ')} you don't want to miss out on this one!</p>
                </>
              )}
              <p className='read-button'
              onClick={openModal}
              >Read more about {latestFilm.name}</p>
            </div>
          </div>
        </div>
        <div className="cw-heading">
          <h1>Movies <br /> By The Sea</h1>
        </div>
      </div>
    </Page>
    {modal ? <Modal handleModal={closeModal} info={latestFilm} /> : <></>}
    </>
  );
}
