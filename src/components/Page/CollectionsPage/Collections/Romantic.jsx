import { useEffect, useState } from 'react'

import { Collection } from '../../../common/Collection/Collection';
import { getRomanticFilms } from '../../../../services/MovieService';

import Loading from '../../../LoadingScreen/LoadingScreen';

export default function Romantic() {

    const [films, setFilms] = useState();
    const [load, setLoad] = useState(true);
    const img = "https://ik.imagekit.io/mbts/romance_L-Ocd2eOh.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1645938024600";

    useEffect(() => {
        getRomanticFilms()
        .then((res) => {
            setFilms(res);
            setLoad(false);
        })
    }, [])

  return load ? (<Loading />) : (
    <Collection
    img={img}
    alt={img}
    bg_info={"Moonrise Kingdom, Wes Anderson"}
    heading={"Romantic Invitation"}
    subheading={"In the mood for some love? We got you covered! Hold your loved one close as we take you on a journey to wonderland!"}
    data={films}
    />
  )
}
