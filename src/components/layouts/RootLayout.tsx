import { Outlet } from "react-router-dom"

import {
  FC,
  useState,
  useEffect
} from 'react';

import {
  Layout,
} from 'antd';

const { Header, Content, Sider } = Layout;
import SideBarLayout from "@/components/layouts/SideBarLayout"

const RootLayout: FC = () => {
  const [marginLeft, setMarginLeft] = useState(200)
  const [isShowSider, setIsShowSider] = useState(true)
  const [appName, setAppName] = useState('Mana4.0')


  useEffect(() => {
    if (window.innerWidth > 768) {
      setMarginLeft(200)
      setIsShowSider(true)
    } else {
      setMarginLeft(0)
      setIsShowSider(false)
    }
    const handleWindowResize = () => {
      if (window.innerWidth > 768) {
        setMarginLeft(200)
        setIsShowSider(true)
      } else {
        setMarginLeft(0)
        setIsShowSider(false)
      }
    };

    window.addEventListener('resize', handleWindowResize);
  }, []);
  return (
    <Layout style={{height: "100%"}}>
      {isShowSider &&
      <Sider
        collapsible
        onCollapse={(collapsed) => {
          console.log(collapsed)
          if (collapsed) {
            setMarginLeft(80)
            setAppName('M4.0')
          } else {
            setMarginLeft(200)
            setAppName('Mana4.0')
          }
        }}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", height: "100%"}}>
          <div style={{color: "#ffffff", height: "50px"}}>
            <h1 style={{ textAlign: "center"}}>{ appName }</h1>
          </div>
          <SideBarLayout></SideBarLayout>
        </div>
      </Sider>
      }
      <Layout style={{ marginLeft: marginLeft }}>
        <Header style={{ padding: 0, background: '#ffffff' }} />
        <Content>
          <Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>
  );
};

export default RootLayout;
