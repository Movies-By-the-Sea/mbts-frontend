import { ScrollMenu } from 'react-horizontal-scrolling-menu';

import './scrollBar.css';

export default function ScrollBar({data, openModal, className, advanced, setHover, defaultState}) {

  return advanced === undefined ? (
  <ScrollMenu >
    {data.map((item) => (
      <img 
      key       = {item.name}
      onMouseEnter = {setHover(item.name)}
      onClick   = {openModal(item)}
      alt       = {item.name}
      src       = {item.poster}
      className = {className} />
    ))}
  </ScrollMenu>
) : (
    <ScrollMenu >
      {data.map((item) => (
        <img 
        key       = {item.name}
        onMouseEnter = {setHover(item)}
        onMouseLeave = {setHover(defaultState)}
        onClick   = {openModal(item)}
        alt       = {item.name}
        src       = {item.poster}
        className = {className} />
        ))}
    </ScrollMenu>
    );
  }