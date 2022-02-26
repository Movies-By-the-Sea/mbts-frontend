import { useEffect, useState } from 'react'

import { Collection } from '../../../common/Collection/Collection';
import { getInternationalFilms } from '../../../../services/MovieService';

import img from '../../../../images/collections/international.jpg';
import Loading from '../../../LoadingScreen/LoadingScreen';

export default function International() {

    const [films, setFilms] = useState();
    const [load, setLoad] = useState(true);

    useEffect(() => {
        getInternationalFilms()
        .then((res) => {
            setFilms(res);
            setLoad(false);
        })
    }, [])

  return load ? (<Loading />) : (
    <Collection
    img={img}
    alt={img}
    bg_info={"The Handmaiden, Park Chan Wook"}
    heading={"The International Affair"}
    subheading={"Presenting before you, the best that cinema has to offer from land far and beyond."}
    data={films}
    />
  )
}
