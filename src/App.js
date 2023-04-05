import About from './components/about';
import FAQ from './components/faq';
import Gallery from './components/gallery';
import Landing from './components/landing';
import Navbar from './components/navbar';
import Partner from './components/partner';
import Roadmap from './components/roadmap';
import Team from './components/team';

function App() {
  return (
    <>
    <Navbar />
    <Landing />
    <About />
    {/* <Roadmap /> */}
    <Gallery />
    <Team />
    <Partner />
    <FAQ />
    </>
  );
}

export default App;
