import { useEffect, useState } from 'react'
import { FormatComponent } from "./FormatComponent";
import { callAPI } from '../../../services/MovieService';

import Loading from '../../LoadingScreen/LoadingScreen';

export default function Card({prop}) {

    const [films, setFilms] = useState();
    const [load, setLoad]   = useState(true);

    useEffect(() => {
        callAPI(prop.link)
        .then((res) => {
            setFilms(res);
            setLoad(false);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return load ? (<Loading />) : (
    <FormatComponent
    img        = {prop.bg}
    alt        = {prop.bg}
    bg_info    = {prop.bg_info}
    heading    = {prop.name}
    subheading = {prop.subtitle}
    data       = {films}
    />
  )
}
