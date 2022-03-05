import "./App.css";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="w-screen bg-white dark:bg-[#181818] scrollbar-hide">
      <Header />
      <Hero />
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start lg:px-10 lg:mt-32">
        <About />
        <Skills title="Skills" />
      </div>

      <Projects title="Projects" />
      <ContactForm />
    </div>
  );
}

export default App;
