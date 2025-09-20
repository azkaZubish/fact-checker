import Navbar from "./Navbar";
import Hero from "./Hero";
import FeatureSection from "./FeatureSection";
import ActionsSection from "./ActionsSection";
import Footer from "./Footer";

function App() {
  return (
    <div className="font-sans">
      <Hero />
      <FeatureSection />
      <ActionsSection />
      <Footer />
    </div>
  );
}

export default App;
