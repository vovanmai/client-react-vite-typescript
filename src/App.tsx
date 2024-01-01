import { Provider } from "react-redux"
import { FC } from "react"
import { ConfigProvider } from 'antd'
import theme from "@/configs/theme"
import router from "@/routes";
import { RouterProvider } from "react-router-dom";

import store from '@/store/index'

const App:FC = () => (
  <ConfigProvider
    theme={theme}
  >
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </ConfigProvider>
);

export default App;