import React from 'react';
import emailjs from 'emailjs-com';

  const formStyle= {
      width:'90%',
      marginBottom:'10px'
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
    <div style={{textAlign:'center',
                backgroundColor:'#000',
                color:'#fff'}}>
      <strong>Leasing:</strong> <p>$50/beat</p>
      <strong>Buying:</strong> <p>$500/beat</p>
      </div>
      <h2>Order</h2>
    <form className="contact-form" onSubmit={sendEmail}>
      <label> <strong>First Name</strong></label> <br />
      <input type="text" name="firstname" style={formStyle} placeholder="First Name" /> <br />
      <label> <strong>Last Name</strong></label> <br />
      <input type="text" name="lastname" style={formStyle} placeholder="Last Name" /> <br />
      <label><strong>Email</strong></label> <br />
      <input type="text" name="email" placeholder="Enter your e-mail" style={formStyle} /> <br />
      <label><strong>Beats</strong></label> <br />
      <input type="text" name="beats" placeholder="Enter your beat selections" style={formStyle}/> <br />
      <label><strong>Lease or Buy?</strong></label> <br />
      <input type="text" name="leaseorbuy" placeholder="Leasing or buying? (If both, specify for each beat)" style={formStyle} /> <br />
      <label><strong>CashApp</strong></label> <br />
      <input type="text" name="cashapp" placeholder="Enter your CashApp Username" style={formStyle} /> <br />
      <label><strong>Phone Number (If using Zelle)</strong></label> <br />
      <input type="text" name="phonenumber" placeholder="Enter your phone number you are using Zelle" style={formStyle} /> <br />
      <input type="submit" value="Submit Order" style={{textAlign:'center', 
                                                        backgroundColor:'green', 
                                                        color:'#fff',
                                                        borderRadius:'4px',
                                                        width:'90%',
                                                        marginTop:'10px',
                                                        }} />
    </form> 
    </div>
  );
}

export default Email2;