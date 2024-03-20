import "./testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import Userinfo from "./userInfo/userinfo";
import { useRef } from "react";
const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="testimonials">
     
      <img
        src={back_icon}
        alt=""
        className="back-icon"
        onClick={slideBackward}
      />
       <img
        src={next_icon}
        alt=""
        className="next-icon"
        onClick={slideForward}
      />
      <div className="slider">
        <ul ref={slider}>
          <Userinfo
            userImg={user_1}
            name="نیما صادقی"
            loc="موسسه آموزشی کارن"
            comment="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع بات"
          />
          <Userinfo
            userImg={user_2}
            name="نیما صادقی"
            loc="موسسه آموزشی کارن"
            comment="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع بات" 
          />
          <Userinfo
            userImg={user_3}
            name="نیما صادقی"
            loc="موسسه آموزشی کارن"
            comment="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع بات"
          />
          <Userinfo
            userImg={user_4}
            name="نیما صادقی"
            loc="موسسه آموزشی کارن"
            comment="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع بات"
          />
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
