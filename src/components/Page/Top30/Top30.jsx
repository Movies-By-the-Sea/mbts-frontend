import { useState, useEffect } from 'react';
import { Page } from '../../common/Page';
import { getTop30Films } from '../../../services/MetaInfoService';

import Loading from '../../LoadingScreen/LoadingScreen';
import ScrollCard from './ScrollCard/ScrollCard';

export default function Top30() {
    const img = "https://ik.imagekit.io/mbts/top30_nnzfgf-gm.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646124049610";

    const [loading, setLoading] = useState(true);
    const [films, setFilms] = useState([]);

    useEffect(() => {
        getTop30Films()
        .then((res) => {
          setFilms(res['result']);
          setLoading(false);
        })
      }, []);

      return loading ? (<Loading />) : (
          <Page img={img} alt={img}>
              <ScrollCard data={films}/>
          </Page>
      )
}