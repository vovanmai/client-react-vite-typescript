import { Link, Outlet } from "react-router-dom";
import {useEffect} from "react";

const Home = () => {
  useEffect(() => {
  })
  return <>
    <Link to={"/home/contact"}>Contact</Link> <br/>
    <Link to={"/home/about"}>About</Link>
    <Outlet></Outlet>
  </>
}

export default Home