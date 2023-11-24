import Splash from "../components/Splash/Splash";
import About from "../components/About/About";
import Reviews from "../components/Reviews/Reviews/Reviews";
import Splash2 from "../components/Splash2/Splash2";
import Contact from "../components/Contact/Contact";
import ProductCard from "../components/ProductCard/ProductCard";
import Classes from "../components/Classes/Classes";

const Home = () => {
  return (
    <div>
      <Splash />
      <About />
      <ProductCard />
      <Reviews />
      <Classes />
      <Splash2 />
      <Contact />
    </div>
  );
};

export default Home;
