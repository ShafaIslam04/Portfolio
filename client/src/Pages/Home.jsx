import NavBar from "../components/NavBar/NavBar.jsx";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Education from "../components/Education/Education";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects.jsx";
import Contact from "../components/Contact/Contact.jsx";
import Footer from "../components/Footer/Footer.jsx";


const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Home;