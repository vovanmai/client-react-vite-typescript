import { Link } from "react-router-dom";

const List = () => {
  return (
    <>
      <h1>List staff</h1>
      <Link to={"/staffs/create"}>Create staff</Link>
      <Link to={"/staffs/edit/123"}>Edit staff</Link>
      <Link to={"/settings/password"}>Setting password</Link>
    </>
  )
}

export default List