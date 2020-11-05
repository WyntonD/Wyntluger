import React from 'react';
import emailjs from 'emailjs-com';

// import './ContactUs.css';

function Email() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_llcpc9c', 'template_2rgemg9', e.target, 'user_qYD4MLdttnih5LD9sk3yF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="text" name="name" placeholder="Full Name" />
      {/* <label>Name</label> */}
      <input type="email" name="email" placeholder="E-mail" />
      {/* <label>Email</label> */}
      <input type="text" name="beats" placeholder="Enter your beat selections" />
      {/* <label>Message</label> */}
      <input type="text" name="leaseorbuy" placeholder="Leasing or Buying?" />
      <input type="text" name="cashapp" placeholder="CashApp Username" />
      <input type="text" name="phonenumber" placeholder="Phone number (If using Zelle)" />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Email;