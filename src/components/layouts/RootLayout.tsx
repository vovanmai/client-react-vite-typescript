import { Outlet } from "react-router-dom"

import * as React from 'react';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps['items'] = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  CloudOutlined,
  CloudOutlined,
  CloudOutlined,
  CloudOutlined,
  CloudOutlined,
  CloudOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

const RootLayout: React.FC = () => {
  return (
    <Layout hasSider>
      <Sider
        collapsible
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", height: "100%"}}>
          <div style={{color: "#ffffff", height: "50px"}}>
            <h1>Mana4.0</h1>
          </div>
          <Menu style={{flex: 1, overflowY: "auto"}} theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
        </div>
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <Header style={{ padding: 0, background: '#ffffff' }} />
        <Content>
          <Outlet></Outlet>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Mana4.0 ©2023 Created by Lionel Vo</Footer>
      </Layout>
    </Layout>
  );
};

export default RootLayout;