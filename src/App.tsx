import Hero from './sections/Hero';
import About from './sections/About';
import Footer from './sections/Footer';
//import Navbar from './sections/Navbar';
import Contact from './sections/Contact';
//import Clients from './sections/Clients';
import Projects from './sections/Projects';
import WorkExperience from './sections/Experience';

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Projects />
      {/* <Clients /> */}
      <WorkExperience />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
