import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/components/layouts/RootLayout";
import About from "@/components/About";

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
        path: "about/:id",
        element: <About/>,
        loader: check
      },
      {
        path: "blogs",
        element: (<h1>This is blogs pages</h1>),
      }
    ]
  }
]);

export default router