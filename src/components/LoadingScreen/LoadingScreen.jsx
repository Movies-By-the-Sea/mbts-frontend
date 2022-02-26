import { useState } from 'react';

import img from '../../images/misc/loading.gif';
import './loading.css';

export default function Loading() {

    const exampleText = [
        "Writing the first draft of the script",
        "Preparing the film storyboard",
        "Assembling the cast and crew",
        "Deciding the location and arranging logistics",
        "Setting up the lights and camera to start filming",
        "Editing footage in post-production"
    ];

    const [loaderText, setLoaderText] = useState(exampleText[0]);
    const [textIndex, setTextIndex] = useState(0);

    let textTimer = setTimeout(function(){
        setTextIndex((textIndex + 1) % exampleText.length);
        setLoaderText(exampleText[textIndex]);
    }, 300);

  return (
    <div className='loading-screen'>
        <div className="loading-container">
            <div className="loading-title">Loading...</div>
            <img src={img} alt="" className="loading-gif" />
            <div className='loader-text'>{loaderText}</div>
        </div>
    </div>
  )
}
