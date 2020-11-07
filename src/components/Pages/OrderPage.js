import React, { useState } from 'react';
import { Form, Input, Button, Radio, Modal } from 'antd';
import emailjs from 'emailjs-com';
import { InfoCircleOutlined } from '@ant-design/icons';

function Order() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_llcpc9c', 'template_2rgemg9', e.target, 'user_qYD4MLdttnih5LD9sk3yF')
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
        {/* <ResultForm /> */}
      </div>,
        });
      }
      const [componentSize, setComponentSize] = useState('default');
    
      const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
      };    

  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState('optional');

  const onRequiredTypeChange = ({ requiredMark }) => {
    setRequiredMarkType(requiredMark);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{
        requiredMark,
      }}
      onValuesChange={onRequiredTypeChange}
      requiredMark={requiredMark}
    >
      <div style={{textAlign:'center', backgroundColor: '#000', color: '#fff'}}>
        <strong>Leasing:</strong> <p>$50/beat</p>
        <strong>Buying:</strong> <p>$500/beat</p>
      </div>
      <h2>Order</h2>
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
        <Input type="submit" value="Submit Order" style={{ backgroundColor: '#52c41a' }} />
      </Form.Item>
    </Form>
  );
};

export default Order;