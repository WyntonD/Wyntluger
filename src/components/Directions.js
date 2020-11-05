import React from 'react';

import { Drawer, Button } from 'antd';

import BuyForm from './BuyForm';

class Directions extends React.Component {
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

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showDrawer} style={{width:'100%', color:'#fff', backgroundColor:'green'}}>
          How to Buy
        </Button>
        <Drawer
          title={<img src={process.env.PUBLIC_URL + './images/WhiteLogo.png'} alt="Logo" style={{width:200, height:200}}></img>}
          width={520}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <div>
            <h1>Wyntluger Beats offers payment through CashApp and Zelle!</h1> <br />
            <h2>Directions:</h2> <br />
            <ul>
              <li>1.Find the name of your selected beat(s) on the beat page</li>
              <li>2. Click on the <BuyForm /> button and fill out the information
                form as directed
              </li>
              <li>3. You will receive a payment request for your total amount via
                either CashApp or Zelle
                from <strong>$WyntonD</strong> or <strong>(919)-699-6444</strong>
              </li>
              <li>4. Send the total payment for your beat selections via CashApp or Zelle to:
                <h2>$WyntonD</h2> or <strong>(919)-699-6444</strong>
              </li>
            </ul> <br />
            <h3>You will receive your beats via e-mail from
              wyntlugerbeats@gmail.com
              with your receipt followed by the terms and conditions of your beat purchase
            </h3>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default Directions;