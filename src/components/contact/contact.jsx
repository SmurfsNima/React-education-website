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
        <h3>
          Send a massage <img src={msg_icon} alt="" />
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit necessitatsto
          molestias aliquam at quo eligendi natus magnam labore recusandae
          dolores officiis consequuntur dolore magni voluptatum illum! Nulla
          quaerat voluptatem doloribus quod, alias deserunt similique earum
          provident? Quisquam nulla unde harum, sed totam sequi tempore!
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" /> sadeghinima090@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" /> +989907499672
          </li>
          <li>
            <img src={loc_icon} alt="" />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit
            <br />. Doloremque, iure.
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder="Enter your Name" />
          <label htmlFor="phone-number">Phone number</label>
          <input type="text" placeholder="Enter your mobile number" />
          <label htmlFor="msg">Write your massage here</label>
          <textarea
            rows="6"
            placeholder="enter your massage"
          ></textarea>
          <button className="btn dark-btn">
            Submit now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
