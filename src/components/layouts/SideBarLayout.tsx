import {
  FC,
} from 'react';

import {
  AppstoreOutlined,
} from '@ant-design/icons';

import { Menu } from "antd"

const SideBarLayout: FC = () => {
  return (
    <>
      <Menu
        style={{flex: 1, overflowY: "auto"}}
        defaultOpenKeys={['1']}
        defaultSelectedKeys={['1']}
        mode="inline"
        theme="dark"
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
      </Menu>
    </>
  )
}

export default SideBarLayout