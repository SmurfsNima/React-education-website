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
        src={next_icon}
        alt=""
        className="next-icon"
        onClick={slideForward}
      />
      <img
        src={back_icon}
        alt=""
        className="back-icon"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <Userinfo
            userImg={user_1}
            name="Nima sadeghi"
            loc="edusity,USa"
            comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi fugit, cupiditate nobis blanditiis possimus nulla et dolorum perspiciatis harum voluptatibus"
          />
          <Userinfo
            userImg={user_2}
            name="Nima sadeghi"
            loc="edusity,USa"
            comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi fugit, cupiditate nobis blanditiis possimus nulla et dolorum perspiciatis harum voluptatibus"
          />
          <Userinfo
            userImg={user_3}
            name="Nima sadeghi"
            loc="edusity,USa"
            comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi fugit, cupiditate nobis blanditiis possimus nulla et dolorum perspiciatis harum voluptatibus"
          />
          <Userinfo
            userImg={user_4}
            name="Nima sadeghi"
            loc="edusity,USa"
            comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi fugit, cupiditate nobis blanditiis possimus nulla et dolorum perspiciatis harum voluptatibus"
          />
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
