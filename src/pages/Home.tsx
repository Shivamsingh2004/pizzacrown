import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import TrustBadges from "../components/TrustBadges/TrustBadges";
import Featured from "../components/Featured/Featured";
import Menu from "../components/Menu/Menu";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import About from "../components/About/About";
import Location from "../components/Location/Location";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import MobileActionBar from "../components/MobileActionBar/MobileActionBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-charcoal">
      <a
        href="#menu"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-charcoal focus:font-semibold"
      >
        Skip to menu
      </a>
      <Navbar />
      <main>
        <Hero />
        <TrustBadges />
        <Featured />
        <Menu />
        <WhyChooseUs />
        <About />
        <Location />
        <Contact />
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}
