import {
  FC, useEffect,
  useState,
} from 'react';

import { Drawer, Menu } from "antd"
import menuData from '@/configs/menu'
import {matchPath, useLocation, useNavigate} from "react-router-dom";
import {keys} from "lodash";
import {mapActiveRoutes} from "@/configs/route-names";
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
    const activeRoute = mapActiveRoutes[key]
    if (activeRoute) {
      setActiveRoute(activeRoute)
      navigate(key)
      onClose()
    }
  }

  const selectSubMenu = (keys: string[]) => {
    setOpenKeys(keys)
  }

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
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        mode="inline"
        items={menuData}
        onClick={(data) => selectMenu(data)}
        onOpenChange={(openKeys) => selectSubMenu(openKeys)}
      />
    </Drawer>
  )
}

MobileSideBar.defaultProps = {
  visible: false
};

export default MobileSideBar