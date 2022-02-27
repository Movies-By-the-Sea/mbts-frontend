import { useEffect, useState } from 'react'

import { Collection } from '../../../common/Collection/Collection';
import { getSciFiFilms } from '../../../../services/MovieService';

import Loading from '../../../LoadingScreen/LoadingScreen';

export default function SciFi() {

    const [films, setFilms] = useState();
    const [load, setLoad]   = useState(true);
    const img               = "https://ik.imagekit.io/mbts/scifi_sQlQdEjaD.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1645938024779";

    useEffect(() => {
        getSciFiFilms()
        .then((res) => {
            setFilms(res);
            setLoad(false);
        })
    }, [])

  return load ? (<Loading />) : (
    <Collection
    img        = {img}
    alt        = {img}
    bg_info    = {"Blade Runner 2047, Denis Villeneuve"}
    heading    = {"The SciFi Imagination"}
    subheading = {"Enter a world where the only limit to what humans can achieve is their imagination."}
    data       = {films}
    />
  )
}
