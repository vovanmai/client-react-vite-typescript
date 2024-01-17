import {
  FC, useEffect,
  useState,
} from 'react';

import {
  AppstoreOutlined,
} from '@ant-design/icons';

import { Drawer, Menu } from "antd"
interface PropType {
  visible: boolean,
  changeVisible: (isShow: boolean) => void,
}

const MobileSideBar: FC<PropType> = (
  {
     visible,
     changeVisible,
  }
  ) => {
  const [open, setOpen] = useState(visible);

  useEffect(() => {
    setOpen(visible)
  }, [visible])

  const onClose = () => {
    changeVisible(false)
  };
  return (
    <Drawer
      title="Basic Drawer"
      width={230}
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
      </Menu>
    </Drawer>
  )
}

MobileSideBar.defaultProps = {
  visible: false
};

export default MobileSideBar