import './hero.css'
import arrow from '../../../assets/dark-arrow.png'
const Hero = () => {
    return (  <div className="hero container">
        <div className="hero-text">
            <h1>We Ensure Better education for a better word</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laboriosam ea repellendus quisquam voluptas nostrum molestias. Ut maiores aliquid sunt, illo nisi cumque nulla velit!</p>
            <button className='btn'>Explore more <img src={arrow} alt="" /></button>
        </div>
    </div> );
}
 
export default Hero;