import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/components/layouts/RootLayout";
import About from "@/components/About";
import Test from "@/components/Test";
import * as React from "react";

const Contact = React.lazy(() => import('@/components/Contact'));
const Blog = React.lazy(() => import('@/components/Blog'));

const check = (data:any) => {
  console.log(data)
  return true
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: (<h1>This is home pages</h1>),
      },
      {
        path: "about",
        element: <About/>,
        loader: check
      },
      {
        path: "blogs",
        element: <Blog/>,
      },
      {
        path: "test",
        element: <Test/>,
      },
      {
        path: "contact",
        element: <Contact/>,
      }
    ]
  }
]);

export default router