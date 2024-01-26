import { Avatar } from "antd";
import { ArrowLeftOutlined } from '@ant-design/icons'
import {Link} from "react-router-dom";

const Header = ({channel}: any) => {
  const name = channel.name.substring(0, 1).toUpperCase()
  return (
      <div style={{borderBottom: "1px solid #e1dbdb", height: 60, padding: "0 5px", boxShadow: "0px 25px 20px -20px rgba(157,157,157,0.45)" }} className="d-flex align-item-center">
        <Link style={{marginRight: 15, color: 'black'}} to={"/chat"}><ArrowLeftOutlined /></Link>
        <Avatar size="large" style={{ backgroundColor: '#87d068' }}>{name}</Avatar>
        <div style={{marginLeft: 10}}>{channel.name}</div>
      </div>
  );
}

export default Header