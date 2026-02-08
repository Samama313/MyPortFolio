import About from './assets/components/About';
import Contact from './assets/components/Contact';
import Header from './assets/components/Header';
import Projects from './assets/components/Projects';
import Skills from './assets/components/Skills';


function App() {
  return (
    <div className="w-full">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact  />
    </div>
  );
}

export default App;
