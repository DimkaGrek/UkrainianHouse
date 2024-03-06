import AboutUs from "../../components/AboutUs/AboutUs";
import Activities from "../../components/Activities/Activities";
import Hero from "../../components/Hero/Hero";
import NewsDigest from "../../components/NewsDigest/NewsDigest";

const Home = () => {
  return (
    <main>
      <Hero />
      <NewsDigest />
      <AboutUs />
      <Activities />
    </main>
  );
};

export default Home;
