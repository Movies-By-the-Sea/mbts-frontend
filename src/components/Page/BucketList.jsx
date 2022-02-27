import { useEffect, useState } from 'react'

import { getMustWatch } from '../../services/MetaInfoService';
import {Collection} from '../common/Collection/Collection';

import Loading from '../LoadingScreen/LoadingScreen';

export default function BucketList() {

    const [films, setFilms] = useState();
    const [load, setLoad] = useState(true);
    const img = "https://ik.imagekit.io/mbts/bucket_list_bl9AGyEBf.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645937449245";

    useEffect(() => {
        getMustWatch()
        .then((res) => {
            setFilms(res);
            setLoad(false);
        })
    }, [])


  return load ? (<Loading />) : (
    <Collection
    img={img}
    alt={img}
    bg_info={"Tree of Life, Terrance Mallick"}
    heading={"The Bucket List"}
    subheading={"Enjoy a curated list of films that we feel are a #MustWatch."}
    data={films}
    />
  )
}
