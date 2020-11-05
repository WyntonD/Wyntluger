import React from 'react';

import { Layout, Menu, Drawer } from 'antd';
import {
  HomeOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import BuyForm from '../BuyForm';
import Contact from '../Contact';
// import BeatsPage from '../BeatsPage';

import './Nav.css';

const { Sider } = Layout;

class Nav extends React.Component {
  state = {
    collapsed: false,
    visible: false,
    placement: 'right'
  };

  onChange = e => {
    this.setState({
      placement: e.target.value,
    });
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    const { placement, visible } = this.state;
    return (
      <Layout style={{ minHeight: '100vh', backgroundColor:'#000' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse} >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/">
              Home
            </Link>
            </Menu.Item>
            <Menu.Item>
            <BuyForm />
            </Menu.Item>
            <Contact />
          </Menu>
        </Sider>
        {/* <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} >
          </Header >
          <Content style={{ margin: '0' }}>
          <Router>
          <Route path="/"><Landing /></Route>
          <Route path="/beats"><BeatsPage /></Route>
          </Router>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ height: '100%', }}>
              <BackgroundVid />
              <Soundcloud />
              <BeatPlayer />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center', backgroundColor:'#000', color:'#fff' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout> */}
        <Drawer
          title="Ways to Pay"
          width={520}
          placement={placement}
          closable={false}
          onClose={this.onClose}
          visible={visible}
          key={placement}
        >
           <div>
            <h1>Wyntluger Beats offers payment through CashApp and Zelle!</h1> <br />
            <h2>Directions:</h2> <br />
            <ul>
              <li>1.Find the name of your selected beat(s) on the beat page</li>
              <li>2. Click on the drawer form button and fill out the information
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
            <h2>You will receive your beats within 1 business day via e-mail from
              wyntlugerbeats@gmail.com
              with your receipt followed by the terms and conditions of your beat purchase
            </h2>
          </div>
        </Drawer>
      </Layout>

      
    );
  }
}

export default Nav;