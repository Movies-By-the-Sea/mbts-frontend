import { useEffect, useState } from 'react';
import img from '../../images/bucket_list.png';
import { getMustWatchIntro } from '../../services/MetaInfoService';
import { useMediaQuery } from 'react-responsive';


import { Page } from '../common/Page';
import "./bucketListPage.css";

export default function BucketListPage() {

    const [films, setFilms] = useState();
    const [load, setLoad] = useState(true);
    const isMobile = useMediaQuery({query:'(max-width:600px)'});

    useEffect(() => {
        getMustWatchIntro()
        .then((res) => {
            setFilms(res);
            setLoad(false);
        })
    }, [])

  return load ? ("Loading...") : (
    <Page img={img} alt={img} info="The Tree of Life, Terrance Malick" className="bucketListPage">

        <h1 className='bl-heading'>The Bucket List</h1>

        <div className="bl-subtitle">
            <p>Enjoy a curated list of films that we feel are a #MustWatch.</p>
            <p>View complete collection</p>
        </div>

        <div className="bl-intro-list">
            {isMobile ? films.slice(0,6).map((item) => {
                return (<img src={item.poster} key={item.name} alt="" className="bl-list-into-item" />)
            }) : films.map((item) => {
                return (<img src={item.poster} key={item.name} alt="" className="bl-list-into-item" />)
            })}
        </div>

    </Page>
  )
}
