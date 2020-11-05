import React from 'react';
import { Drawer, Button } from 'antd';
import OrderForm from './OrderForm';
// import LogoImage from './Logo';

class DrawerForm extends React.Component {
  state = { visible: false };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showDrawer}>
          Get Beats
        </Button>
        <Drawer
          title={<img src={process.env.PUBLIC_URL + './images/WLLogo.jpg'} alt="Logo" style={{width:200, height:200}}></img>}
          width={720}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ paddingBottom: 80 }}
        >
          {/* <LogoImage /> */}
          <h2>Order</h2>
          <p>Navigate to the beat section if you need to re-listen to confirm your order</p>
          <OrderForm />
        </Drawer>
      </div>

    );
  }
}

export default DrawerForm;
