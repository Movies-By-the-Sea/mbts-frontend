import { useEffect, useState } from 'react'

import { Collection } from '../../../common/Collection/Collection';
import { getMustWatch } from '../../../../services/MovieService';

import Loading from '../../../LoadingScreen/LoadingScreen';

export default function Action() {

    const [films, setFilms] = useState();
    const [load, setLoad]   = useState(true);
    const img               = "https://ik.imagekit.io/mbts/mbts_essentials_80oM8GEPq.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646110586120";

    useEffect(() => {
        getMustWatch()
        .then((res) => {
            setFilms(res);
            setLoad(false);
        })
    }, [])

  return load ? (<Loading />) : (
    <Collection
    img        = {img}
    alt        = {img}
    bg_info    = {"The Green Knight, David Lowery"}
    heading    = {"MBTS Essentials"}
    subheading = {"There are some films which deserves to be on everyone’s bucket list. Sharing here are some of the #MustWatch movies."}
    data       = {films}
    />
  )
}
