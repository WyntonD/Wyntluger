import React from 'react';

import { Layout } from 'antd';
import BackgroundVid from '../BackgroundVid/BackgroundVid';
// import BeatsPage from '../BeatsPage';

const { Content, Footer } = Layout;

const footerstyle = {
    paddingRight:'20px',
    paddingLeft:'20px'
}

class LandingPage extends React.Component {

    render() {
        return (

            <Layout style={{ height: '100%' }}>
                <Layout className="site-layout">
                    {/* <Header className="site-layout-background" style={{ padding: 0 }} >
            <BuyForm />
          </Header > */}
                    <Content style={{ margin: '0' }}>
                        <div className="site-layout-background" style={{ height: '100%', }}>
                            <BackgroundVid />
                        </div>
                        <Footer style={{ textAlign: 'center', backgroundColor: '#000', color: '#fff' }}>
                            <a style={footerstyle} href="https://www.instagram.com/wynton_d/?hl=en">                       
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-camera-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                    <path fill-rule="evenodd" d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                                </svg>           
                            </a>
                            <a style={footerstyle} href="https://soundcloud.com/wyntluger">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cloud-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z" />
                                </svg>
                            </a>                       
                        </Footer>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default LandingPage;
