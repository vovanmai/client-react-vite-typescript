import Header from "@/components/chat/channel/Header";
import Footer from "@/components/chat/channel/Footer";
import Messages from "@/components/chat/channel/Messages";
import dataChannels from "@/configs/channels";
import { useNavigate, useParams } from "react-router-dom";
import { keyBy } from 'lodash'
import {useEffect, useState} from "react";
import socket from "@/socket";

const Channel = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [channel, setChannel] = useState({
    id: 0,
    name: '',
  })
  const [messages, setMessages] = useState<any>([])

  useEffect(() => {
    const channels = keyBy(dataChannels, 'id')
    const channelItem = channels[params.id ?? '']
    if (channelItem) {
      setChannel(channelItem)
    } else {
      navigate('/chat')
    }
  })

  useEffect(() => {
    const chatOn = (data: any) => {
      setMessages((chat:any) => ([...chat, data]))
    }
    socket.on('channel', chatOn)
    return () => {
      socket.off('channel', chatOn)
    };
  }, [])

  const onSubmitMessage = (data: any) => {
    setMessages([...messages, data])
    socket.emit('channel', data)
  }

  return (
    <div className="w-100 h-100 d-flex" style={{ flexDirection: "column"}}>
      <Header channel={channel}/>
      <Messages
        messages={messages}
      />
      <Footer
        onSubmitMessage={(data: any) => onSubmitMessage(data)}
      />
    </div>
  );
}

export default Channel;