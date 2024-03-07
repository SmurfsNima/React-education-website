
import './App.css';
import About from './components/about/about';
import Programs from './components/navbar/Programs/programs';
import Hero from './components/navbar/heroSection/hero';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Programs/>
        <About/>
      </div>

    </div>
  );
}

export default App;
