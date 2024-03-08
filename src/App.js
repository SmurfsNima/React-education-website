
import './App.css';
import About from './components/about/about';

import Navbar from './components/navbar/navbar';
import Hero from './components/heroSection/hero.jsx';
import Programs from './components/Programs/programs.jsx';
import Title from './components/Title/title.jsx';
import Campus from './components/campus/campus.jsx';
import Testimonials from './components/testimonials/testimonials.jsx';
import Contact from './components/contact/contact.jsx';
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
        <Campus/>
        <Testimonials/>
        <Title text={'Cntact us'} head={'Get in touch'}/>
        <Contact/>
      </div>

    </div>
  );
}
export default App;
