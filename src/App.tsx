import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Offerings from "./components/Offerings";
import Differentiation from "./components/Differentiation";
import Proof from "./components/Proof";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-ink-900 text-white">
      <Nav />
      <Hero />
      <Problem />
      <Offerings />
      <Differentiation />
      <Proof />
      <Process />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
