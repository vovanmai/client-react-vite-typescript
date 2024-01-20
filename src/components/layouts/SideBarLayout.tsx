import {
  FC,
  useEffect,
  useState,
} from 'react';

import { keys } from "lodash"
import { useNavigate, useLocation, matchPath } from "react-router-dom";
import { mapActiveRoutes } from "@/configs/route-names"
import menuData from '@/configs/menu'


import { Menu } from "antd"

const SideBarLayout: FC = () => {
  const navigate = useNavigate();
  const [openKeys, setOpenKeys] = useState<string[]>([])
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])
  const [activeRoute, setActiveRoute] = useState<any>(null)
  const location = useLocation()

  const handleSetActiveRoute = () => {
    const routeKeys = keys(mapActiveRoutes)
    for(let i = 0; i < routeKeys.length; i++) {
      const match = matchPath(routeKeys[i], location.pathname)
      if(match) {
        setActiveRoute(mapActiveRoutes[routeKeys[i]])
        break
      }
    }
  }


  useEffect(() => {
    handleSetActiveRoute()
  }, [location])

  useEffect(() => {
    if (activeRoute) {
      setOpenKeys(activeRoute.openKeys)
      setSelectedKeys(activeRoute.selectedKeys)
    }
  }, [activeRoute])

  const selectMenu = ({key}: {key: string}): void => {
    console.log(mapActiveRoutes, key)
    const activeRoute = mapActiveRoutes[key]
    if (activeRoute) {
      setActiveRoute(activeRoute)
      navigate(key)
    }
  }

  const selectSubMenu = (keys: string[]) => {
    setOpenKeys(keys)
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