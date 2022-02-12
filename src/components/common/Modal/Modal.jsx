import { AiOutlineCloseCircle } from 'react-icons/ai';

import './modal.css';

export default function Modal({handleModal, info}) {
  return (
    <div className='Modal'>
        <img src={info.poster} alt="" className="modal-img" />
        <div className="modal-info">
            <div className="modal-heading">
                <h1>{info.name}</h1>
                <AiOutlineCloseCircle size={"1.5em"} className='close-btn' onClick={handleModal} />
            </div>
            <div className="modal-meta-info">
                <div className="modal-meta-info-trivia">
                    {info.director} 
                    <div className="info-divider">|</div>
                    {info.year}
                    <div className="info-divider">|</div>
                    {info.genre.map((i)=>i.name + ' ')}
                </div>
                <div className="modal-meta-info-rating">
                    mbts score: {info.ratings.overall} / 5
                </div>
            </div>
            <br />
            <p className="modal-review">
                {info.review}
            </p>
            <br />
            <div className="modal-extra-info">
                <div className="modal-actors-list">
                    Starring: {info.actors.map((i) => i.name + ', ')}
                </div>
                <a target={"_blank"} rel="noreferrer" href={info.trailer} className="modal-trailer">Watch Trailer</a>
            </div>
        </div>
    </div>
  )
}
