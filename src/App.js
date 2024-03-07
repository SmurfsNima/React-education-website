
import './App.css';
import About from './components/about/about';

import Navbar from './components/navbar/navbar';
import Hero from './components/heroSection/hero.jsx';
import Programs from './components/Programs/programs.jsx';
import Title from './components/Title/title.jsx';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title text={'what we offer'} head={'programs'}/>
       <Programs/>
        <About/>
        <Title text={'what we offer'} head={'programs'}/>
      </div>

    </div>
  );
}
export default App;
