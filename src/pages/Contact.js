import React from "react";
import Navigation from "../components/Navigation";
import { init } from "emailjs-com";
import emailjs from "emailjs-com";
init("user_L65zCMb9bIs4SPmGcAtv1");

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    let formMessage = document.querySelector(".form-message");

    emailjs
      .sendForm(
        "service_bn9vq81",
        "template_jkyd5vz",
        e.target,
        "user_L65zCMb9bIs4SPmGcAtv1"
      )
      .then(
        (result) => {
          console.log(result.text);
          formMessage.innerHTML = "Votre message a bien été envoyé !";
        },
        (error) => {
          console.log(error.text);
          formMessage.innerHTML =
            "Une erreur s'est produite, veuillez réessayer.";
        }
      );
  }

  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <h3>Me contacter</h3>
        <form className="contactForm" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />

          <input
            type="text"
            name="name"
            className="inputName"
            placeholder="Votre nom *"
            required
          />

          <input
            type="text"
            name="company"
            className="inputCompany"
            placeholder="Société"
          />

          <input
            type="text"
            name="phone"
            className="inputPhone"
            placeholder="Téléphone"
          />

          <input
            type="email"
            name="email"
            className="inputEmail"
            placeholder="Votre Email *"
            required
          />

          <textarea
            name="message"
            className="inputMessage"
            placeholder="Votre message *"
            maxLength="255"
            required
          />

          <input type="submit" value="Envoyer" className="inputSubmit" />
          <div className="form-message"></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
