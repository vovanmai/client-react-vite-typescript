import { createBrowserRouter, Outlet } from "react-router-dom";
import RootLayout from "@/components/layouts/RootLayout";
import { lazy, Suspense } from "react";
import { Spin } from 'antd';
const Loading = <Spin size="small"/>

const lazyLoadComponent = (component: () => Promise<any>) => {
  const Component = lazy(component);
  return () => (
    <Suspense fallback={Loading}>
      <Component />
    </Suspense>
  )
}

const StaffList = lazyLoadComponent(() => import('@/views/staff/List'))
const StaffCreate = lazyLoadComponent(() => import('@/views/staff/Create'))
const StaffEdit = lazyLoadComponent(() => import('@/views/staff/Edit'))
const SettingPassword = lazyLoadComponent(() => import('@/views/setting/Password'))
const Home = lazyLoadComponent(() => import('@/components/Home'))
const NotFound = lazyLoadComponent(() => import('@/components/NotFound'))

import routeNames from "@/configs/route-names"
import Contact from "@/components/Contact";
import About from "@/components/About";
import AuthLayout from "@/components/layouts/AuthLayout";
const Login = lazyLoadComponent(() => import('@/views/auth/Login'))
const Register = lazyLoadComponent(() => import('@/views/auth/Register'))
const MyBankQR = lazyLoadComponent(() => import('@/views/MyBankQR'))
const ChatLayout = lazyLoadComponent(() => import('@/components/layouts/ChatLayout'))
const ChatJoin = lazyLoadComponent(() => import('@/views/chat/Join'))
const Channels = lazyLoadComponent(() => import('@/views/chat/Channels'))
const Channel = lazyLoadComponent(() => import('@/views/chat/Channel'))

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: routeNames.staff.path,
        children: [
          {
            path: routeNames.staff.list.path,
            element: <StaffList/>,
          },
          {
            path: routeNames.staff.create.path,
            element: <StaffCreate/>,
          },
          {
            path: routeNames.staff.edit.path,
            element: <StaffEdit/>,
          }
        ]
      },
      {
        path: routeNames.setting.path,
        children: [
          {
            path: routeNames.setting.password.path,
            element: <SettingPassword/>,
          },
        ]
      },
    ]
  },
  {
    path: "home",
    element: <Home />,
    children: [
      {
        path: 'contact',
        element: <Contact/>,
      },
      {
        path: 'about',
        element: <About/>,
      },
    ]
  },
  {
    path: 'auth',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Login/>
      },
      {
        path: 'register',
        element: <Register/>
      }
    ]
  },
  {
    path: 'chat',
    element: <Outlet />,
    children: [
      {
        path: '',
        element: <ChatLayout/>,
        children: [
          {
            index: true,
            element: <Channels/>,
          },
          {
            path: ':id',
            element: <Channel/>,
          },
        ]
      },
      {
        path: 'join',
        element: <ChatJoin/>,
      },
    ]
  },
  {
    path: '',
    element: <MyBankQR />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router