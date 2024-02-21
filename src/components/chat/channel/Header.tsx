import { Avatar, Tooltip, Dropdown } from "antd";
import type { MenuProps } from 'antd';
import { ArrowLeftOutlined, InfoCircleOutlined, SettingOutlined, DeleteOutlined } from '@ant-design/icons'
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import socket from "@/socket";

const Header = (props: any) => {
  const {channel, handleRemoveMessages} = props
  const [numberActiveUser, setNumberActiveUser] = useState<number>(0)

  useEffect(() => {
    socket.on('number-user-in-room', (number: number) => {
      setNumberActiveUser(number)
    })
    return () => {
      socket.off('number-user-in-room')
    }
  })

  const items: MenuProps['items'] = [
    {
      key: 'remove-all-messages',
      label: (
        <div style={{color: "red"}}>
          <DeleteOutlined />
          <span style={{marginLeft: 5}}>Xóa tất cả tin nhắn</span>
        </div>
      ),
    },
  ]

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    if (e.key === 'remove-all-messages') {
      handleRemoveMessages()
    }
  };
  const name = channel.name.substring(0, 1).toUpperCase()
  return (
      <div style={{borderBottom: "1px solid #e1dbdb", justifyContent: "space-between", height: 60, padding: "0 10px", boxShadow: "0px 25px 20px -20px rgba(157,157,157,0.45)" }} className="d-flex align-item-center">
        <div className="d-flex align-item-center">
          <Link style={{marginRight: 15, color: 'black'}} to={"/chat"}><ArrowLeftOutlined /></Link>
          <Avatar size="large" style={{ backgroundColor: '#87d068' }}>{name}</Avatar>
          <div style={{marginLeft: 10}}>{channel.name}</div>
          <div style={{marginLeft: 5}}>
            <Dropdown menu={{items, onClick: handleMenuClick,}} placement="bottomLeft" arrow>
              <SettingOutlined />
            </Dropdown>
          </div>
        </div>
        <div>
          <div style={{cursor: "pointer"}}>
            <span style={{color: '#14b8a6'}}>Active: </span>{numberActiveUser}
            <Tooltip placement="top" title={'Số lượng online bao gồm bạn'}>
              <InfoCircleOutlined style={{marginLeft: 5}} />
            </Tooltip>
          </div>
        </div>
      </div>
  );
}

export default Header