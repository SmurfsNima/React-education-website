import "./contact.css";
import React from "react";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import loc_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
import { useState } from "react";
const Contact = () => {
  const [result, setResult] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending....");
    const formData = new FormData(e.target);

    formData.append("access_key", "410812ec-98a2-4541-a881-f6b9f05a0b4a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      e.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor="name">نام شما</label>
          <input type="text" placeholder="نام خود را وارد کنید" />
          <label htmlFor="phone-number">شماره همراه</label>
          <input type="text" placeholder="شماره همراه خود را وارد کنید" />
          <label htmlFor="msg">پیغام شما</label>
          <textarea rows="6" placeholder="پیغام خود را وارد کنید"></textarea>
          <button className="btn dark-btn submit-btn">ثبت</button>
        </form>
        <span>{result}</span>
      </div>
      <div className="contact-col">
        <h3>
        <img src={msg_icon} alt="" />
          با ما درارتباط باشید
        </h3>
        <p>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت 
        </p>
        <ul>
          <li className="email">
             sadeghinima090@gmail.com <img src={mail_icon} alt="" />
          </li>
          <li className="phone">
            ۰۹۹۰۷۴۹۹۶۷۲ <img src={phone_icon} alt="" />
          </li>
          <li>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم  چاپ 
            <img src={loc_icon} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
