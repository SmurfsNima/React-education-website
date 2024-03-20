import './hero.css'
import arrow from '../../assets/dark-arrow.png';
const Hero = () => {
    return (  <div className="hero container">
        <div className="hero-text">
            <h1>آموزش بینهایت: هر آنچه که نیاز دارید</h1>
            <p>"اکتشاف کنید ویژگی‌های جدید، مطالب متنوع و دوره‌های آموزشی تخصصی در آموزشگاه ما. با استفاده از روش‌های بروز و اساتید مجرب، به دنیایی از دانش و مهارت دست پیدا کنید."</p>
            <button className='btn'> <img src={arrow} alt="" /> بیشتر بدانید </button>
        </div>
    </div> );
}
 
export default Hero;