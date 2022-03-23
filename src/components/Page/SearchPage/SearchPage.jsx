import './searchPage.css';
import Modal from '../../common/Modal/Modal';

import { useState } from 'react';
import { Page } from '../../common/Page';
import { callAPI } from '../../../services/MovieService';

export default function SearchPage() {

    const img = "https://ik.imagekit.io/mbts/search_1Y7b_SlYv.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1648052357983";

    const [userInput, setUserInput]   = useState('');
    const [userOutput, setUserOutput] = useState(false);
    const [apiOutput, setApiOutput]   = useState([]);
    const [modal, setModal]           = useState(false);


    const handleChange = (e) => {
        e.preventDefault();
        setUserInput(e.target.value);
    }

    const handleSubmit = (e) => {
        if(e.charCode === 13) {
            let endpoint = 'movie/' + userInput;
            callAPI(endpoint)
            .then(res => {
                setApiOutput(res);
                setUserOutput(true);
            })
        }
    }

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

  return (
      <>
        <Page
            img={img}
            alt={img}
            info="The Batman, Matt Reeves"
        >
            <div className="search-container">
                <div className="total-card">
                    <div className="total-number">150+</div>
                    <div className="total-number-subheading">Reviews Written</div>
                </div>
                <div className="search-card">
                    <div className="search-card-heading">Search Movie</div>
                    <div className="search-card-subheading">Search from our review database to find the film you need</div>
                    <input 
                        type="text" 
                        placeholder='Enter film name and press Enter' className="search-card-input" 
                        onChange={handleChange}
                        onKeyPress={handleSubmit}
                    />
                    {userOutput ? 
                        (apiOutput.length === 0 ? 
                            (
                            <div className="search-failure">
                                <div className="search-failure-header">
                                    No matching results
                                </div>
                                <div className="search-failure-subheading">
                                    Make sure the movie name is correct. Or we simply haven’t reviewed this one yet.
                                </div>
                            </div>
                            ) : (
                            <div className="search-success">
                                <div className="search-success-result">
                                    <div className="search-success-name">
                                        {apiOutput[0].name}
                                    </div>
                                    <div className="search-success-director">
                                        Directed by {apiOutput[0].director}
                                    </div>
                                </div>
                                <p className='read-button' onClick={openModal}>
                                    Read Review
                                </p>
                                <a target={"_blank"} rel="noreferrer" href={apiOutput[0].trailer} className="modal-trailer">
                                    Watch Trailer
                                </a>
                            </div>
                            )
                        ) : <></>}
                </div>
            </div>
        </Page>
        {modal ? <Modal handleModal={closeModal} info={apiOutput[0]} /> : <></>}
    </>
  )
}
