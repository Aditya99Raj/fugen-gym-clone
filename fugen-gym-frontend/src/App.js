import './App.css';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Join from './components/Join';
import Plans from './components/Plans';
import Programs from './components/Programs';
import Reasons from './components/Reasons';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <HeroSection/>
      <Programs/>
      <Reasons/>
      <Plans/>
      <Testimonials/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
