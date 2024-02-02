import Header from "@/components/chat/channel/Header";
import Footer from "@/components/chat/channel/Footer";
import Messages from "@/components/chat/channel/Messages";
import dataChannels from "@/configs/channels";
import { useNavigate, useParams } from "react-router-dom";
import { keyBy } from 'lodash'
import {useEffect, useState} from "react";
import socket from "@/socket";
import Message from '@/request/Message'

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

    // join channel
    const channelName = `channel_${channelItem.id}`
    socket.emit('join_channel', {channel_name: channelName})

    const receiveMessage = (data: any) => {
      setMessages((chat:any) => ([...chat, data]))
    }

    socket.on('receive_message', receiveMessage)
    return () => {
      socket.off(channelName)
      socket.off('receive_message')
    };
  }, [])

  const onSubmitMessage = async (data: any) => {
    setMessages([...messages, data])
    data.channel_id = channel.id
    data.socket_id = socket.id
    try {
      const response:any = await Message.create(data)
      socket.emit('send_message', response.data.data)
    } catch (e) {
      console.log('onSubmitMessage error...')
    }
  }

  return (
    <div className="w-100 h-100 d-flex" style={{ flexDirection: "column"}}>
      <Header channel={channel}/>
      <Messages
        messages={messages}
      />
      <Footer
        channel={channel}
        onSubmitMessage={(data: any) => onSubmitMessage(data)}
      />
    </div>
  );
}

export default Channel;