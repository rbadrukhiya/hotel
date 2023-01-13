import Header from './Header';
import Slider from './slider';
import Festival from './festival';
import Map from './map';
import Room from './room_type';
import Choose from './choose';
import Footer from './footer';
import Review from './review';
import Fixed from './fixed';
import Popular from './popular';
import Happy from './happy';
import Copy from './copyright';

function Home() {
    return (
      <div>
        <Header></Header>
      <Slider></Slider>
      <Festival></Festival>
      <Popular></Popular>
      <Map></Map>
      <Room></Room>
      <Choose></Choose>
      {/* <Happy></Happy> */}
      <Review></Review>
      <Fixed></Fixed>
      <Footer></Footer>
      <Copy></Copy>
      

      </div>
    );
  }
  
  export default Home