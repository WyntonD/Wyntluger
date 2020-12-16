import React from 'react';

import { Layout, Menu } from 'antd';
import {
  HomeOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import 'moment-timezone';
import BuyForm from '../BuyForm';
import Contact from '../Contact';
import Soundcloud from '../Soundcloud/Soundcloud';
import Directions from '../Directions';
import Nav from '../Nav/Nav';


const { Header, Content, Footer, Sider } = Layout;
const variant = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}


class Beats extends React.Component {
  state = {
    collapsed: false,
    visible: false,
    placement: 'right'
  };

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

    return (
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
        variants={variant}>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse} style={{ backgroundColor: '#000' }}>
            <div className="logo" />
            <Menu defaultSelectedKeys={['1']} mode="inline" style={{ backgroundColor: '#000' }}>
              <img src={process.env.PUBLIC_URL + './images/BlackLogo.png'} alt="Logo" style={{ width: 200, height: 200 }}></img>
              <Menu.Item key="1" icon={<HomeOutlined style={{color: '#fff', fontFamily:"'Cinzel', serif"}} />}>
                <Link to="/" style={{ color: '#000' }}>
                  Home
            </Link>
              </Menu.Item>
              <Menu.Item>
                <BuyForm />
              </Menu.Item>
              <Menu.Item>
                <Directions />
              </Menu.Item>
              <Menu.Item>
                <Contact />
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0, backgroundColor: "#000" }} >
              {/* <h1 style={{
              color: "#fff", fontFamily: "'Crimson Text', serif",
              fontSize: '60px;', textAlign: 'center'
            }}>
              Beats
            </h1> */}
              {/* <Moment format="MMMM Do YYYY, h:mm a" style={{color:'#fff', textAlign:'center'}} /> <br /> */}
            </Header >
            <Content style={{ margin: '0' }}>
              <div className="site-layout-background" style={{ height: '100%', }}>
                <Soundcloud />
              </div>
            </Content>
            <Footer style={{ textAlign: 'center', backgroundColor: '#000', color: '#fff' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Layout>
      </motion.div>
    );
  }
}

export default Beats;
