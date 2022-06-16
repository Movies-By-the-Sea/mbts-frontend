import { Page } from '../../common/Page';
import { useState, useEffect } from 'react';
import { bg_data } from '../../../theme/bg_data';
import { callAPI } from '../../../services/MovieService';

import Modal from '../../common/Modal/Modal';
import ScrollCard from './ScrollCard/ScrollCard';
import Loading from '../../LoadingScreen/LoadingScreen';

export default function Top30() {

    const [loading, setLoading] = useState(true);
    const [films, setFilms]     = useState([]);
    const [modal, setModal]     = useState(false);
    const [inFocus, setInFocus] = useState();

    useEffect(() => {
        callAPI(bg_data['top30']['api_endpoint'])
        .then((res) => {
          setFilms(res);
          setLoading(false);
        })
      }, []);

      const closeModal = () => {
        if(modal){
          document.querySelectorAll('.Page').forEach(function(m) {
            m.style.opacity = "1";
          });
          setInFocus();
          setModal(false);
        }
      }
    
      const openModal = (item) => (e) => {
        e.preventDefault();
        document.querySelectorAll('.Page').forEach(function(m) {
          m.style.opacity = "0.8";
        });
        setInFocus(item)
        setModal(true);
      }

      return loading ? (<Loading />) : (
          <>
          <Page 
            img={bg_data['top30']['image']} 
            alt={bg_data['top30']['alt']}>
              <ScrollCard data={films} handleOpen={openModal}/>
          </Page>
          {modal ? <Modal handleModal={closeModal} info={inFocus} /> : <></>}
          </>
      )
}