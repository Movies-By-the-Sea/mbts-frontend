import { useEffect, useState } from 'react'

import { Collection } from '../../../common/Collection/Collection';
import { getTrueStoryFilms } from '../../../../services/MovieService';

import Loading from '../../../LoadingScreen/LoadingScreen';

export default function TrueStory() {

    const [films, setFilms] = useState();
    const [load, setLoad]   = useState(true);
    const img               = "https://ik.imagekit.io/mbts/true_story_DgHpwELxp.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645938026175";

    useEffect(() => {
        getTrueStoryFilms()
        .then((res) => {
            setFilms(res);
            setLoad(false);
        })
    }, [])

  return load ? (<Loading />) : (
    <Collection
    img        = {img}
    alt        = {img}
    bg_info    = {"Lawrence Of Arabia, David Lean"}
    heading    = {"Based on True Events"}
    subheading = {"Too much fantasy can be a bit much. Get a breather with our true stories collection."}
    data       = {films}
    />
  )
}
