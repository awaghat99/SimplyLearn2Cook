import Splash from "../components/Splash/Splash";
import About from "../components/About/About";
import Reviews from "../components/Reviews/Reviews/Reviews";
import Splash2 from "../components/Splash2/Splash2";
import Contact from "../components/Contact/Contact";
import ProductCard from "../components/ProductCard/ProductCard";

const Home = () => {
  return (
    <div>
      <Splash />
      <About />
      <ProductCard />
      <Reviews />
      <Splash2 />
      <Contact />
    </div>
  );
};

export default Home;
