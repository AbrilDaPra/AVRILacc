import imgBanner from '../../public/images/banner.jpg';
import '../App.css';

const Home = () => {
  return (
    <div className='banner'>
        <img src={imgBanner} alt="imagen banner" />
        <div className="bannerContent">
            <h1>GOLDEN BABY</h1>
            <h2>Welcome to AVRIL accesories</h2>
        </div>
    </div>
  )
}

export default Home;