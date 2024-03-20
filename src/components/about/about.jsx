import "./about.css";
import about_img from '../../assets/about.png';
import about_icon from '../../assets/play-icon.png';
const About = ({setplay}) => {
  return (
    <div className="about">
      <div className="about-right">
        <h3>بهترین مقصد برای کسب و کار آموزشی</h3>
        <h2>توانایی های جدید خود را کشف کنید</h2>
        <p>"موسسه آموزشی ما با بیش از ده سال تجربه در ارائه آموزش‌های حرفه‌ای، به عنوان یکی از پیشگامان در عرصه آموزش آنلاین شناخته می‌شود. با تیمی از اساتید برجسته و با استفاده از روش‌های نوین، ما به ارائه دوره‌های متنوع و کاربردی در زمینه‌های مختلف می‌پردازیم. اعتماد شما، حمایت ماست در راه توسعه مهارت‌های شما."</p>
      </div>
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={about_icon} alt="" className="about-icon" onClick={()=>setplay(true)}/>
      </div>
    </div>
  );
};

export default About;
