import Navbar from './Navbar/Navbar';
import BgInfo from './BgInfo/BgInfo';
import Footer from './Footer/Footer';
import Background from '../../theme/Background';

export const Page = (props) => {

  var isMobile = window.innerWidth < 600;
  let bg = new Background(props, isMobile);

  return (
    <div className='Page' style={bg.getImageStyle()}>

      {isMobile ? <></> : 
        <video autoPlay muted loop preload='true' style={bg.getVideoStyle()} poster={props.img}>
          <source src={props.video} type='video/webm' />
        </video>
      }

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
