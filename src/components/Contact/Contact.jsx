import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [message, setMessage] = useState();

  const sendEmail = (e) => {
    setUserName('');
    setUserEmail('');
    setMessage('');
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2l3mj38",
        "template_t72eo5q",
        form.current,
        "lc9UGStOlHvp56Gvy"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{ color: darkMode ? 'white' : '' }}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user" placeholder="Name" onChange={event => {
            setUserName(event.target.value)
          }} />
          <input type="email" name="user_email" className="user" placeholder="Email"
            onChange={event => {
              setUserEmail(event.target.value)
            }}
          />
          <textarea name="message" className="user" placeholder="Message"
            onChange={event => {
              setMessage(event.target.value)
            }}

          />
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
