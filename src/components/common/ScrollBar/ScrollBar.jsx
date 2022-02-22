import { ScrollMenu } from 'react-horizontal-scrolling-menu';

import './scrollBar.css';

export default function ScrollBar({data, openModal, className}) {

    return (
        <ScrollMenu >
            {data.map((item) => (
              <img 
              key={item.name}
              onClick={openModal(item)}
              alt={item.name} 
              src={item.poster}
              className={className} />
            ))}
        </ScrollMenu>
    );
  }