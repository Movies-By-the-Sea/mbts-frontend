import { useEffect, useState } from 'react'

import {Collection} from '../common/Collection/Collection';

import img from '../../images/collections/true_story.png';
import { getTrueStoryFilms } from '../../services/MovieService';

export default function TrueStory() {

    const [films, setFilms] = useState();
    const [load, setLoad] = useState(true);

    useEffect(() => {
        getTrueStoryFilms()
        .then((res) => {
            setFilms(res);
            setLoad(false);
        })
    }, [])

  return load ? ("Loading...") : (
    <Collection
    img={img}
    alt={img}
    bg_info={"Lawrence Of Arabia, David Lean"}
    heading={"Based on True Events"}
    subheading={"Too much fantasy can be a bit much. Get a breather with our true stories collection."}
    data={films}
    />
  )
}
