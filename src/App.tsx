import { FC, Suspense } from "react"
import { ConfigProvider } from 'antd'
import theme from "@/configs/theme"
import router from "@/routes";
import { RouterProvider } from "react-router-dom";

const App:FC = () => (
  <ConfigProvider
    theme={theme}
  >
    <Suspense fallback={<h1>Loading....</h1>}>
      <RouterProvider router={router} />
    </Suspense>
  </ConfigProvider>
);

export default App;