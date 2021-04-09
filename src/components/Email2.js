import React from 'react';
import emailjs from 'emailjs-com';

const formStyle = {
  width: '90%',
  marginBottom: '10px',
  color: '#000'
}

function Email2() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_3qwyqjf', 'template_8k70fsj', e.target, 'user_rPqt2rKqVdOSXb8qYB3Qs')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }

  return (
    <div>
      <div
        style={{
          textAlign: 'center',
          backgroundColor: '#000',
          color: '#fff',
          fontSize: 20
        }}>
        <strong >Leasing:</strong> <p>$40 </p>
        <strong>Buying:</strong> <p>$500</p>
      </div>
      {/* <h2 style={{color:'#fff'}}>Purchase Beats:</h2> */}
      <form className="contact-form" onSubmit={sendEmail}>
        <label> <strong style={{ color: '#fff' }}>Name</strong></label> <br />
        <input type="text" name="ordername" style={formStyle} placeholder="Enter your name here" /> <br />
        {/* <label> <strong style={{color:'#fff'}}>Last Name</strong></label> <br />
      <input type="text" name="lastname" style={formStyle} placeholder="Last Name" /> <br /> */}
        <label><strong style={{ color: '#fff' }}>Email</strong></label> <br />
        <input type="text" name="email" placeholder="Enter your e-mail here" style={formStyle} /> <br />
        <label><strong style={{ color: '#fff' }}>Beats</strong></label> <br />
        <input type="text" name="beats" placeholder="Please separate by commas if more than one" style={formStyle} /> <br />
        <label><strong style={{ color: '#fff' }}>Lease/Buy</strong></label> <br />
        <input type="text" name="leaseorbuy" placeholder="Leasing or buying?" style={formStyle} /> <br />
        <label><strong style={{ color: '#fff' }}>CashApp</strong></label> <br />
        <input type="text" name="cashapp" placeholder="Enter your CashApp Username here" style={formStyle} /> <br />
        <label><strong style={{ color: '#fff' }}>Phone Number (If using Zelle)</strong></label> <br />
        <input type="text" name="phonenumber" placeholder="Enter your phone number here if you are using Zelle" style={formStyle} /> <br />
        <input type="submit" value="Submit Order" style={{
          textAlign: 'center',
          backgroundColor: 'green',
          color: '#fff',
          borderRadius: '4px',
          width: '90%',
          marginTop: '10px',
        }} />
      </form>
      <p style={{ color: '#fff' }}>(Check your email after submitting)</p>
    </div>
  );
}

export default Email2;