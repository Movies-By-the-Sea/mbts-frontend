import { useEffect, useState } from 'react'

import {Collection} from '../common/Collection/Collection';
import { getSciFiFilms } from '../../services/MovieService';

import img from '../../images/collections/scifi.jpg';
import Loading from '../LoadingScreen/LoadingScreen';


export default function SciFi() {

    const [films, setFilms] = useState();
    const [load, setLoad] = useState(true);

    useEffect(() => {
        getSciFiFilms()
        .then((res) => {
            setFilms(res);
            setLoad(false);
        })
    }, [])

  return load ? (<Loading />) : (
    <Collection
    img={img}
    alt={img}
    bg_info={"Blade Runner 2047, Denis Villeneuve"}
    heading={"The SciFi Imagination"}
    subheading={"Enter a world where the only limit to what humans can achieve is their imagination."}
    data={films}
    />
  )
}
