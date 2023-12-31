import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;

const Welcome = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
  return(
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
       
      </Header>
      <Content
        style={{
          padding: '48px',
        }}
      >
      
        <div
          style={{
            padding: 24,
            minHeight: '60lvh',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Welcome to the application
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  )
};

export default Welcome;
