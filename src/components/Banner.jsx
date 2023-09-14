import '../App.css';
import imgBanner from '../../public/images/banner-marmol.jpg';

function Banner() {
  return (
    <div className='banner'>
        <img src={imgBanner} alt="imagen banner" />
        <div className="bannerContent">
            <h1>GOLDEN BABY</h1>
            <h2>Welcome to AVRIL accesories</h2>
        </div>
    </div>
  );
}

export default Banner;