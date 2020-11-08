import React, { useState } from 'react';
import {
  Form,
  Input,
  Modal,
} from 'antd';

import emailjs from 'emailjs-com';
import ResultForm from './Result';

function OrderForm() {
  
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_946xt07', 'template_xta6o2j', e.target, 'user_qYD4MLdttnih5LD9sk3yF')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }

  function success() {
    Modal.success({
      content:
  <div>
    <ResultForm />
  </div>,
    });
  }
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <Form
      labelCol={{
          span: 4,
        }}
      wrapperCol={{
          span: 14,
        }}
      layout="horizontal"
      initialValues={{
          size: componentSize,
        }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      className="contact-form"
      onSubmit={sendEmail}
    >
      <div style={{textAlign:'center'}}>
      <h2>Order</h2>
      <strong>Leasing:</strong> <p>$50/beat</p>
      <strong>Buying:</strong> <p>$500/beat</p>
      </div>
      <p>Name</p>
      <Form.Item >
        <Input type="text" name="name" />
      </Form.Item>
      <p>E-mail</p>
      <Form.Item >
        <Input type="email" name="email" placeholder="Enter your e-mail" />
      </Form.Item>
      <p>Beats</p>
      <Form.Item >
        <Input type="text" name="beats" placeholder="Enter your beat selections" />
      </Form.Item>
      <p>Leasing or Buying?</p>
      <Form.Item >
        <Input type="text" name="leaseorbuy" placeholder="Are you leasing or buying? (If both, specify for each beat)" />
      </Form.Item>
      <p>CashApp</p>
      <Form.Item >
        <Input type="text" name="cashapp" placeholder="Enter your CashApp Username" />
      </Form.Item>
      <p>Phone Number (If using Zelle)</p>
      <Form.Item >
        <Input type="text" name="phonenumber" placeholder="Enter your phone number you are using Zelle" />
      </Form.Item>
      <Form.Item >
        <Input type="submit" value="Submit Order" style={{ backgroundColor: '#52c41a' }} onClick={success} />
      </Form.Item>
    </Form>
  );
}

export default OrderForm;
