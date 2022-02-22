import { Page } from '../common/Page';
import { useNavigate } from 'react-router-dom';

import img from '../../images/collections.png';
import intl from '../../images/collections/Cards/International Affair.png';
import horror from '../../images/collections/Cards/Horror Nights.png';
import trueS from '../../images/collections/Cards/True Stories.png';
import meta from '../../images/collections/Cards/The Meta Experience.png';
import ScrollBar from '../common/ScrollBar/ScrollBar';

export default function Collections() {

    const navigate = useNavigate();
    const mapping = [
        {
            name: "International Affair",
            poster: intl,
            link: "international"
        },
        {
            name: "Horror Nights",
            poster: horror,
            link: "horror"
        },
        {
            name: "True Stories",
            poster: trueS,
            link: "True-Story"
        },
        {
            name: "The Meta Experience",
            poster: meta,
            link: "meta"
        }
    ]

    const openPage = (item) => (e) => {
        e.preventDefault();
        navigate(`/${item.link}`);
    }

  return (
      <Page img={img} alt={img} info={"Requiem For A Dream, Darren Arronofsky"}>
          <h1>Browser Collection</h1>
          <p>Select an experience from below to discover more such films</p>
            <ScrollBar
            data={mapping}
            openModal={openPage}
            className="collection-card"
            />
      </Page>
  )
}
