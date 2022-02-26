import { useEffect, useState } from 'react'

import { Collection } from '../../../common/Collection/Collection';
import { getThrillerFilms } from '../../../../services/MovieService';

import img from '../../../../images/collections/mystery.jpeg';
import Loading from '../../../LoadingScreen/LoadingScreen';

export default function Animated() {

    const [films, setFilms] = useState();
    const [load, setLoad] = useState(true);

    useEffect(() => {
        getThrillerFilms()
        .then((res) => {
            setFilms(res);
            setLoad(false);
        })
    }, [])

  return load ? (<Loading />) : (
    <Collection
    img={img}
    alt={img}
    bg_info={"Mulholland Drive, David Lynch"}
    heading={"Mystery Alley"}
    subheading={"Full of twists and turns, this alley will bowl you over upside down. Perfect for friday nights with popcorn!"}
    data={films}
    />
  )
}
