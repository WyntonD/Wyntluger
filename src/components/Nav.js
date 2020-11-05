import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import { Menu, Drawer, Anchor } from 'antd';
import DrawerForm from './Drawer';


class Nav extends React.Component {
  state = {
    current: 'mail',
    visible: false,
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onChildrenDrawerClose = () => {
    this.setState({
    });
  };

  showChildrenDrawer = () => {
    this.setState({
    });
  };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  hideBeats = () => {
    this.setState({
      visible: false,
    });
  };

  showBeats = () => {
    this.setState({
      visible: true,
    });
  };


  handleClick = (e) => {
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    const { Link } = Anchor;
   
    return (
      <div style={{ backgroundColor: '#000' }} >
        <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" >
          <Menu.Item key="home" >
            <Anchor >
              <Link href="#home" title="Home" />
            </Anchor>
          </Menu.Item>
          <Menu.Item key="beats" >
            <Anchor>
              <Link href="#beats" title="Beats" />
            </Anchor>
          </Menu.Item>
          <Menu.Item key="date" >
            <Anchor>
              <Link>
                <Moment format="dddd" />
              </Link>
            </Anchor>
          </Menu.Item>
          <Menu.Item key="order" >
            <DrawerForm />
          </Menu.Item>
        </Menu>

        <Drawer
          title=""
          width={520}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        />
      </div>
    );
  }
}

export default Nav;
