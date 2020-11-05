import React from 'react';

import { Layout, Menu, Breadcrumb } from 'antd';
import {

  HomeOutlined,
  CustomerServiceOutlined,
  FileUnknownOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';

import Soundcloud from './Soundcloud/Soundcloud';

import './Nav/Nav.css';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class BeatsPage extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<HomeOutlined />}>
              Home
            </Menu.Item>
            <Menu.Item key="2" icon={<CustomerServiceOutlined />}>
              Beats
            </Menu.Item>
            <Menu.Item key="3" icon={<ShoppingCartOutlined />}>
                Buy 
            </Menu.Item>
            <Menu.Item key="4" icon={<FileUnknownOutlined />}>
                How to Buy
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} >
              Hello
          </Header >
          <Content style={{ margin: '0' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Beats</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, height: '100%', }}>
              <Soundcloud />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default BeatsPage;
