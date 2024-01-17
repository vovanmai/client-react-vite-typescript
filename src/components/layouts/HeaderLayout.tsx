import {
  FC,
  useState,
} from 'react';

import {
  MenuOutlined,
} from '@ant-design/icons';

import {
  Layout,
  Button,
} from 'antd';

const { Header } = Layout;
import MobileSideBar from "@/components/layouts/MobileSideBar"

interface PropType {}

const HeaderLayout: FC<PropType> = () => {
  const [isShowMenuMobile, setIsShowMenuMobile] = useState(false)
  return (
    <Header style={{ padding: "0 15px", background: '#ffffff', display: 'flex', alignItems: "center"}}>
      <Button type="text" style={{ padding: 0 }}>
        <MenuOutlined style={{fontSize: 25}} onClick={() => setIsShowMenuMobile(true)} />
      </Button>
      <MobileSideBar
        visible={isShowMenuMobile}
        changeVisible={(isShow: boolean) => setIsShowMenuMobile(isShow)}
      />
    </Header>
  )
}

HeaderLayout.defaultProps = {}

export default HeaderLayout