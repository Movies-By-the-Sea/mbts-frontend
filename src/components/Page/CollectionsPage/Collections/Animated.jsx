import { useEffect, useState } from 'react';

import { Collection } from '../../../common/Collection/Collection';
import { getAnimatedFilms } from '../../../../services/MovieService';

import Loading from '../../../LoadingScreen/LoadingScreen';

export default function Animated() {

    const [films, setFilms] = useState();
    const [load, setLoad] = useState(true);
    const img = "https://ik.imagekit.io/mbts/animated_pipREjypm.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645938022170"

    useEffect(() => {
        getAnimatedFilms()
        .then((res) => {
            setFilms(res);
            setLoad(false);
        })
    }, [])

  return load ? (<Loading />) : (
    <Collection
    img={img}
    alt={img}
    bg_info={"Perfect Blue, Satoshi Kon"}
    heading={"Animation Land"}
    subheading={"Discover some of the finest animated movies that do more than just entertain the inner child!"}
    data={films}
    />
  )
}
