import { useEffect, useState } from 'react'

import { getMustWatch } from '../../services/MetaInfoService';
import {Collection} from '../common/Collection/Collection';

import img from '../../images/bucket_list.png';

export default function BucketList() {

    const [films, setFilms] = useState();
    const [load, setLoad] = useState(true);

    useEffect(() => {
        getMustWatch()
        .then((res) => {
            setFilms(res);
            setLoad(false);
        })
    }, [])

  return load ? ("Loading...") : (
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
