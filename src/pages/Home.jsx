import Navbar from "../component/Layout/Navbar";
import Hero from "../component/Section/Hero";
import About from "../component/Section/About";
import Experiences from "../component/Section/Experiences";
import Skills from "../component/Section/Skills";
import Dsa from "../component/Section/Dsa";
import Projects from "../component/Section/Projects";
import Footer from "../component/Layout/Footer";
import Education from "../component/Section/Education";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experiences />
      <Skills />
      <Dsa />
      <Projects />
      <Footer />
      <Education/>  
    </>
  );
};

export default Home;