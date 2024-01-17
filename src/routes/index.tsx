import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/components/layouts/RootLayout";
import EmptyComponent from "@/components/EmptyComponent";
import { lazy, Suspense } from "react";

const lazyLoadComponent = (component: () => Promise<any>) => {
  const Component = lazy(component);
  return () => (
    <Suspense fallback={<>loading...</>}>
      <Component />
    </Suspense>
  )
}

const StaffList = lazyLoadComponent(() => import('@/views/staff/List'))
const StaffCreate = lazyLoadComponent(() => import('@/views/staff/Create'))
const StaffEdit = lazyLoadComponent(() => import('@/views/staff/Edit'))
const Test = lazyLoadComponent(() => import('@/components/Test'))

import RouteNames from "@/configs/route-names"
import Home from "@/components/Home";
import About from "@/components/About";
import Contact from "@/components/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "test",
        element: <Test/>,
      },
      {
        path: RouteNames.STAFF_LIST,
        element: <EmptyComponent/>,
        children: [
          {
            index: true,
            element: <StaffList/>,
          },
          {
            path: RouteNames.STAFF_CREATE,
            element: <StaffCreate/>,
          },
          {
            path: RouteNames.STAFF_EDIT,
            element: <StaffEdit/>,
          }
        ]
      },
    ]
  },
  {
    path: "home",
    element: <Home/>,
    children: [
      {
        path: 'contact',
        element: <Contact/>,
      },
      {
        path: 'about',
        element: <About/>,
      }
    ]
  },
]);

export default router