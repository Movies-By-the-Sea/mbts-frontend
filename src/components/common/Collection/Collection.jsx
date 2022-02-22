import { useState } from 'react';

import { Page } from '../Page'
import { useMediaQuery } from 'react-responsive';

import ScrollBar from '../ScrollBar/ScrollBar';
import './collection.css';

import Modal from '../Modal/Modal';

export const Collection = (props) => {

  const [modal, setModal] = useState(false);
  const [inFocus, setInFocus] = useState();

  const isMobile = useMediaQuery({query:'(max-width:600px)'});

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

  return (
    <>
    <Page img={props.img} alt={props.alt} info={props.bg_info} className="collectionPage">

        <h1 className='cl-heading'>{props.heading}</h1>
        <div className="cl-subtitle">
            <p>{props.subheading}</p>
        </div>
        {isMobile ? (<div className='cl-list-mob'>
          {props.data.map((item) => {
            return (<img 
              onClick={openModal}
              src={item.poster} 
              key={item.name} 
              alt="" 
              className="card-item" />)
          })}
        </div>) : (<ScrollBar openModal={openModal} data={props.data} />)}
        
    </Page>
    {modal ? <Modal handleModal={closeModal} info={inFocus} /> : <></>}
    </>
  )
}
