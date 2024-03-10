import "./about.css";
import about_img from '../../assets/about.png';
import about_icon from '../../assets/play-icon.png';
const About = ({setplay}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={about_icon} alt="" className="about-icon" onClick={()=>setplay(true)}/>
      </div>
      <div className="about-right">
        <h3>Lorem ipsum dolor sit amet.</h3>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor maiores, ratione aliquam delectus iusto, assumenda odit similique placeat numquam tempore nulla labore voluptatem! Molestias fuga sequi libero unde deleniti voluptatibus voluptatem modi. Impedit voluptate ducimus soluta? Ad voluptatem a repudiandae!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sit nobis aut quaerat optio fuga a incidunt ducimus id saepe provident mollitia beatae, ad accusamus, doloremque totam alias. Provident, corporis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sit nobis aut quaerat optio fuga a incidunt ducimus id saepe provident mollitia beatae, ad accusamus, doloremque totam alias. Provident, corporis.</p>

      </div>
    </div>
  );
};

export default About;
