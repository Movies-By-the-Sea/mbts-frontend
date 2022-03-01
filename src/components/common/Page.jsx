import Navbar from './Navbar/Navbar';
import BgInfo from './BgInfo/BgInfo';
import Footer from './Footer/Footer';
import bg_img from '../../theme/style';

export const Page = (props) => {
  return (
    <div className='Page' style={bg_img(props.img, props.alt)}>
    <Navbar />
      <div className="container">

        {props.info === undefined ? <></> : (<BgInfo info={props.info} />)}
        <br /><br />
        
        {props.children}

      </div>
    <Footer />
</div>
  );
}
