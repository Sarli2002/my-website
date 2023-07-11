import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v2jdgzu",
        "template_unz0f8i",
        form.current,
        "UcLDfkS0EI_vDbf3Z"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div class="Contact" id="Contact">
      <div class="Contact-container">
        <div class="heading">
          <h1>Contact me</h1>
        </div>
        <div class="row">
          <div class="column ">
            <div class="g">
              <div class="phone">
                <a href="#">
                  <i class="fas fa-phone-volume"></i>+007 9089 6767
                </a>
              </div>
              <div class="email">
                <a href="#">
                  <i class="fas fa-envelope"></i>abc@gmail.com
                </a>
              </div>
              <div class="email">
                <a href="#">
                  <i class="fa-solid fa-location-dot"></i> Faridabad, Haryana
                </a>
              </div>
            </div>
            <div class="social-media">
              <a href="#" class="social-btn">
                <i class="fa-brands fa-linkedin-in "></i>
              </a>
              <a href="#" class="social-btn">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" class="social-btn">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div class="column">
            <form ref={form} onSubmit={sendEmail}>
              <label for="name"> Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name.."
              />
              <label for="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Your email.."
              />
              <label for="meassage">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write something.."
              ></textarea>
              <input class="btn" type="submit" value="Send"></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
