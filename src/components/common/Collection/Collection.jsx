import { useState } from 'react';

import { Page } from '../Page'
import ScrollBar from '../ScrollBar/ScrollBar';
import './collection.css';

import Modal from '../Modal/Modal';

export const Collection = (props) => {

  const [modal, setModal] = useState(false);
  const [inFocus, setInFocus] = useState();

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
    <Page img={props.img} alt={props.alt} info={props.bg_info} className="bucketListPage">

        <h1 className='bl-heading'>{props.heading}</h1>
        <div className="bl-subtitle">
            <p>{props.subheading}</p>
        </div>
        <ScrollBar openModal={openModal} data={props.data} />
        
    </Page>
    {modal ? <Modal handleModal={closeModal} info={inFocus} /> : <></>}
    </>
  )
}
