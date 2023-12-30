import { Link, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <div>
        <Link to="about">About Us</Link>
      </div>
      <div>
        <Link to="blogs">Blogs</Link>
      </div>
      <div>
        <Link to="contact">Contact</Link>
      </div>

      <div>
        <Outlet></Outlet>
      </div>
    </>
  )
}
export default RootLayout