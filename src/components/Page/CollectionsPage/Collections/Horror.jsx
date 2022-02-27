import { useEffect, useState } from 'react'

import { Collection } from '../../../common/Collection/Collection';
import { getHorrorFilms } from '../../../../services/MovieService';

import Loading from '../../../LoadingScreen/LoadingScreen';

export default function Horror() {

    const [films, setFilms] = useState();
    const [load, setLoad]   = useState(true);
    const img               = "https://ik.imagekit.io/mbts/horror_HpkGsRFeNFLk.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1645938023518";

    useEffect(() => {
        getHorrorFilms()
        .then((res) => {
            setFilms(res);
            setLoad(false);
        })
    }, [])

  return load ? (<Loading />) : (
    <Collection
    img        = {img}
    alt        = {img}
    bg_info    = {"The VVitch, Robert Eggers"}
    heading    = {"Horror Nights"}
    subheading = {"Feeling a bit darring, are we? Well, we’ve got just the right set of films for you here!"}
    data       = {films}
    />
  )
}
