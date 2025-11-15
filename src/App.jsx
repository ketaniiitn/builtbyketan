import Hero from "./components/Hero.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import ContactMe from "./components/ContactMe.jsx";
import Footer from "./components/Footer.jsx";
import NavBar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
