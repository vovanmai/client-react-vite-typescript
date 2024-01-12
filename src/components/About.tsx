import { FC, useState } from 'react';
import { Button, Drawer, Menu } from 'antd';
import {AppstoreOutlined} from "@ant-design/icons";

const About: FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        title="Basic Drawer"
        width={300}
        styles={{
          body: { padding: 0}
        }}
        placement="left"
        onClose={onClose}
        open={open}
      >
        <Menu
          style={{flex: 1, overflowY: "auto"}}
          defaultOpenKeys={['1']}
          defaultSelectedKeys={['1']}
          mode="inline"
        >
          <Menu.SubMenu key="1" title="Settings" icon={<AppstoreOutlined/>}>
            <Menu.Item key="2">Option 1</Menu.Item>
            <Menu.Item key="3">Option 2</Menu.Item>
            <Menu.SubMenu key="4" title="Sub-Menu">
              <Menu.Item key="5">Option 3</Menu.Item>
              <Menu.Item key="6">Option 4</Menu.Item>
            </Menu.SubMenu>
          </Menu.SubMenu>
          <Menu.SubMenu key="7" title="Profile">
            <Menu.Item key="8">Option 5</Menu.Item>
            <Menu.Item key="9">Option 6</Menu.Item>
            <Menu.Item key="10">Option 7</Menu.Item>
            <Menu.Item key="11">Option 8</Menu.Item>
          </Menu.SubMenu>
          {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21].map((number) =>
            <Menu.Item key={number}>Option {number}</Menu.Item>
          )}
        </Menu>
      </Drawer>
    </>
  );
};

export default About;
