import Hero from './components/Hero';
import BubblesSection from './components/BubblesSection';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-zinc-200 selection:bg-emerald-500/30 selection:text-emerald-100 font-['Inter','ui-sans-serif','system-ui']">
      <Hero />
      <BubblesSection />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
