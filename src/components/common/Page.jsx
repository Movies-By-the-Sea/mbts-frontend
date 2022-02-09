import bg_img from '../../theme/style';

import Navbar from './Navbar/Navbar';
import BgInfo from './BgInfo/BgInfo';
import Footer from './Footer/Footer';

export const Page = (props) => {
  return (
    <div style={bg_img(props.img, props.alt)}>
    <Navbar />
      <div className="container">

        <BgInfo info={props.info} />
        <br /><br />
        
        {props.children}

      </div>
    <Footer />
</div>
  );
}
