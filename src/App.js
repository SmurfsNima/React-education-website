
import './App.css';
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
      </div>

    </div>
  );
}

export default App;
