import React from 'react'
import { Avatar } from 'antd';
import { useNavigate } from "react-router-dom";
type PropsType = {
  channel: any,
  key: number
}

const Channel: React.FC<PropsType> = (props) => {
  const navigate = useNavigate()
  const { channel } = props
  const name = channel.name.substring(0, 1).toUpperCase()
  const goToChannel = (id: number) => {
    navigate(`/chat/${id}`)
  }
  return (
      <div onClick={() => goToChannel(channel.id)} style={{height: 50, padding: "5px", cursor: "pointer"}} className="d-flex align-item-center">
          <Avatar size="large" style={{ backgroundColor: '#87d068' }}>{name}</Avatar>
          <div style={{marginLeft: 10}}>
              <div>{channel.name}</div>
          </div>
      </div>
  );
}

export default Channel