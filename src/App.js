import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div className="bg-[#0d0d0d] relative overflow-hidden">
      <div className="fixed w-[700px] h-[700px] bg-pink-600/10 blur-[180px] rounded-full top-[-250px] left-[-250px] pointer-events-none z-0" />
      <div className="fixed w-[500px] h-[500px] bg-cyan-500/8 blur-[160px] rounded-full bottom-[-200px] right-[-200px] pointer-events-none z-0" />

      <div className="relative z-10">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default App;