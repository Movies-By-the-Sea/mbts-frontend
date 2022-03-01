import { useState, useEffect } from 'react';
import { Page } from '../../common/Page';
import { getTop30Films } from '../../../services/MetaInfoService';

import Loading from '../../LoadingScreen/LoadingScreen';
import ScrollCard from './ScrollCard/ScrollCard';
import Modal from '../../common/Modal/Modal';

export default function Top30() {
    
    const img = "https://ik.imagekit.io/mbts/top30_nnzfgf-gm.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646124049610";
    const alt = "https://ik.imagekit.io/mbts/top30mob_rUIwxy1GF.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646131895099"

    const [loading, setLoading] = useState(true);
    const [films, setFilms] = useState([]);
    const [modal, setModal]     = useState(false);
    const [inFocus, setInFocus] = useState();

    useEffect(() => {
        getTop30Films()
        .then((res) => {
          setFilms(res['result']);
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
          <Page img={img} alt={alt}>
              <ScrollCard data={films} handleOpen={openModal}/>
          </Page>
          {modal ? <Modal handleModal={closeModal} info={inFocus} /> : <></>}
          </>
      )
}