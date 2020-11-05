import React from 'react';
import { Drawer, Button } from 'antd';
import OrderForm from './OrderForm';

class BuyForm extends React.Component {
  state = { visible: false, childrenDrawer: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  showChildrenDrawer = () => {
    this.setState({
      childrenDrawer: true,
    });
  };

  onChildrenDrawerClose = () => {
    this.setState({
      childrenDrawer: false,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showDrawer} style={{width:'100%', color:'#fff', backgroundColor:'green'}}>
          Buy Beats
        </Button>
        <Drawer
          title={<img src={process.env.PUBLIC_URL + './images/WhiteLogo.png'} alt="Logo" style={{width:200, height:200}}></img>}
          width={520}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <OrderForm />
        </Drawer>
    </div>
    );
  }
}

export default BuyForm;
