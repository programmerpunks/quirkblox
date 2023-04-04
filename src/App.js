import About from './components/about';
import Gallery from './components/gallery';
import Landing from './components/landing';
import Navbar from './components/navbar';
import Roadmap from './components/roadmap';

function App() {
  return (
    <>
    <Navbar />
    <Landing />
    <About />
    {/* <Roadmap /> */}
    <Gallery />
    </>
  );
}

export default App;
