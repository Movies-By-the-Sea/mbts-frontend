import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';

import { Page } from '../../common/Page';
import { bg_data } from '../../../theme/bg_data';
import { callAPI } from '../../../services/MovieService';

import Modal from '../../common/Modal/Modal';
import Loading from '../../LoadingScreen/LoadingScreen';

import './landingPage.css';

export default function LandingPage() {

  const [latestFilm, setLatestFilm] = useState();
  const [loading, setLoading]       = useState(true);
  const [modal, setModal]           = useState(false);

  const isMobile = useMediaQuery({query:'(max-width:600px)'});

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
    callAPI(bg_data['landingPage']['api_endpoint'])
    .then((res) => {
      setLatestFilm(res[0]);
      setLoading(false);
    })
  }, []);


  return loading ? (<Loading />) : (
    <>
    <Page 
      video = {bg_data['landingPage']['video']}
      img   = {bg_data['landingPage']['image']}
      alt   = {bg_data['landingPage']['alt'] || latestFilm.poster}
      info  = {bg_data['landingPage']['info']}>

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
