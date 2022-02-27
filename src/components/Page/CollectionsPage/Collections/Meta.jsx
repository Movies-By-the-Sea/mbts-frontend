import { useEffect, useState } from 'react'

import { Collection } from '../../../common/Collection/Collection';
import { getMetaFilms } from '../../../../services/MovieService';

import Loading from '../../../LoadingScreen/LoadingScreen';

export default function Horror() {

    const [films, setFilms] = useState();
    const [load, setLoad]   = useState(true);
    const img               = "https://ik.imagekit.io/mbts/meta_vV11jdvCi.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1645938023653";

    useEffect(() => {
        getMetaFilms()
        .then((res) => {
            setFilms(res);
            setLoad(false);
        })
    }, [])

  return load ? (<Loading />) : (
    <Collection
    img        = {img}
    alt        = {img}
    bg_info    = {"I’m Thinking Of Ending Things, Charile Kaufmann"}
    heading    = {"The Meta Experience"}
    subheading = {"Feeling inspired? We got just the right ones here, which will transcend you to a new plane. An artistic powerhouse."}
    data       = {films}
    />
  )
}
