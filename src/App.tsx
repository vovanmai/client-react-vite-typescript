import { FC } from "react"
import { ConfigProvider, Button, Space, Input, Pagination, ThemeConfig } from 'antd'
import { StepBackwardOutlined } from '@ant-design/icons'

const themeConfig:ThemeConfig = {
  token: {
    colorPrimary: '#52c41a',
    borderRadius: 2,
  },
}


const App:FC = () => (
  <ConfigProvider
    theme={themeConfig}
  >
    <Space>

      <Input placeholder="Please Input" />
      <Button type="primary"><StepBackwardOutlined />Submit</Button>
      <Pagination defaultCurrent={1} total={50} />
    </Space>
  </ConfigProvider>
);

export default App;