import { useEffect, useState } from 'react'

import {Collection} from '../common/Collection/Collection';

import img from '../../images/collections/horror.jpg';
import { getHorrorFilms } from '../../services/MovieService';

export default function Horror() {

    const [films, setFilms] = useState();
    const [load, setLoad] = useState(true);

    useEffect(() => {
        getHorrorFilms()
        .then((res) => {
            setFilms(res);
            setLoad(false);
        })
    }, [])

  return load ? ("Loading...") : (
    <Collection
    img={img}
    alt={img}
    bg_info={"Hereditary, Ari Aster"}
    heading={"Horror Nights"}
    subheading={"Feeling a bit darring, are we? Well, we’ve got just the right set of horror and thriller films for you here!"}
    data={films}
    />
  )
}
