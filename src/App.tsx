import { FC } from "react"
import { ConfigProvider } from 'antd'
import theme from "@/configs/theme"
import router from "@/routes";
import { RouterProvider } from "react-router-dom";

const App:FC = () => (
  <ConfigProvider
    theme={theme}
  >
    <RouterProvider router={router} />
  </ConfigProvider>
);

export default App;