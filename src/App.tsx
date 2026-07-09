import Hero from "./components/Hero";
import About from "./components/About";
import Interests from "./components/Interests";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="min-w-0 overflow-x-hidden bg-neutral-50 font-sans text-neutral-900">
      <Hero />
      <About />
      <Interests />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
