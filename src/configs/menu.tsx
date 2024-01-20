import routeNames from "@/configs/route-names";
import { AppstoreOutlined, LockOutlined, SettingOutlined } from "@ant-design/icons";

const menuData = [
  {
    key: routeNames.staff.key,
    label: 'Nhân viên',
    icon: <AppstoreOutlined/>
  },
  {
    key: routeNames.setting.key,
    label: 'Cài đặt',
    icon: <SettingOutlined/>,
    children: [
      {
        key: routeNames.setting.password.key,
        label: 'Mật khẩu',
        icon: <LockOutlined />
      }
    ]
  }
]

export default menuData