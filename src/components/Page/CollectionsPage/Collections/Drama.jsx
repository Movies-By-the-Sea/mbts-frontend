import { useEffect, useState } from 'react'

import { Collection } from '../../../common/Collection/Collection';
import { getDramaFilms } from '../../../../services/MovieService';

import img from '../../../../images/collections/drama.png';
import Loading from '../../../LoadingScreen/LoadingScreen';

export default function Action() {

    const [films, setFilms] = useState();
    const [load, setLoad] = useState(true);

    useEffect(() => {
        getDramaFilms()
        .then((res) => {
            setFilms(res);
            setLoad(false);
        })
    }, [])

  return load ? (<Loading />) : (
    <Collection
    img={img}
    alt={img}
    bg_info={"The Revenant, Alejandro Inarritu"}
    heading={"Soulful Drama"}
    subheading={"For times when all you need is to sit back, relax and watch a slice of life getting acted out in front of you."}
    data={films}
    />
  )
}
