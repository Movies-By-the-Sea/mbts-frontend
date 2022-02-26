import { useEffect, useState } from 'react'

import { Collection } from '../../../common/Collection/Collection';
import { getActionFilms } from '../../../../services/MovieService';

import img from '../../../../images/collections/action.png';
import Loading from '../../../LoadingScreen/LoadingScreen';

export default function Action() {

    const [films, setFilms] = useState();
    const [load, setLoad] = useState(true);

    useEffect(() => {
        getActionFilms()
        .then((res) => {
            setFilms(res);
            setLoad(false);
        })
    }, [])

  return load ? (<Loading />) : (
    <Collection
    img={img}
    alt={img}
    bg_info={"Dunkirk, Christopher Nolan"}
    heading={"Life of Action"}
    subheading={"For the days when one wants to just watch some mindless entertainment. Whats better than some good’ol action films!"}
    data={films}
    />
  )
}
