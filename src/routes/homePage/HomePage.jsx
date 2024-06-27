import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import AboutUs from '../../modules/aboutUs/AboutUs';
import FeaturedIn from '../../modules/featuredIn/FeaturedIn';
import FeaturedProducts from '../../modules/featuredProducts/FeaturedProducts';
import FollowUs from '../../modules/followUs/FollowUs';
import HeroHeader from '../../modules/heroHeader/HeroHeader';
import OurBestseller from '../../modules/ourBestseller/OurBestseller';
import OurPhilosophy from '../../modules/ourPhilosophy/OurPhilosophy';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroHeader/>
      <FeaturedProducts />
      <OurPhilosophy />
      <OurBestseller />
      <AboutUs />
      <FollowUs />
      <FeaturedIn />
      <Footer />

    </div>
  );
}

export default App;
