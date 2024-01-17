import {
  FC, useEffect,
  useState,
} from 'react';

import { keys } from "lodash"

import { useMatch, useNavigate } from "react-router-dom";

import {
  AppstoreOutlined,
  CalculatorOutlined,
} from '@ant-design/icons';

import RouteNames, { mapActiveRoutes } from "@/configs/route-names"

import { Menu } from "antd"

const SideBarLayout: FC = () => {
  const navigate = useNavigate();
  const [openKeys, setOpenKeys] = useState<string[]>([])
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])

  let activeRouteTest: {
    selectedKeys: string[],
    openKeys: string[]
  } = {
    selectedKeys: [],
    openKeys: []
  }
  const testtt = keys(mapActiveRoutes)

  if (testtt?.length > 0) {
    for (let i = 0; i < testtt.length; i++) {
      const match = useMatch(testtt[i])
      if (match) {
        console.log(mapActiveRoutes.test)
        // activeRouteTest = mapActiveRoutes[testtt[i]]
        break
      }
    }
  }
  // console.log(activeRouteTest)

  useEffect(() => {
    // setSelectedKeys(activeRouteTest.selectedKeys)
    // setOpenKeys(activeRouteTest.openKeys)
  }, [])

  const menuData = [
    {
      key: RouteNames.STAFF_LIST,
      label: 'Staffs',
      icon: <AppstoreOutlined/>
    },
    {
      key: RouteNames.TEST,
      label: 'For test',
      icon: <AppstoreOutlined/>
    },
    {
      key: 'settings',
      label: 'Settings',
      icon: <CalculatorOutlined/>,
      children: [
        {
          key: 'password',
          label: 'password',
          icon: <CalculatorOutlined/>,
        }
      ]
    }
  ]

  const selectMenu = ({key}: {key: string}) => {
    navigate(key)
    const activeRoute = mapActiveRoutes[key]
    setOpenKeys(activeRoute.openKeys)
    setSelectedKeys(activeRoute.selectedKeys)
  }

  const selectSubMenu = (openKeys: string[]) => {
    setOpenKeys(openKeys)
  }

  return (
    <>
      <Menu
        style={{flex: 1, overflowY: "auto"}}
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        mode="inline"
        theme="dark"
        items={menuData}
        onClick={(data) => selectMenu(data)}
        onOpenChange={(openKeys) => selectSubMenu(openKeys)}
      >
      </Menu>
    </>
  )
}

export default SideBarLayout;