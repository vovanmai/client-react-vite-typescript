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
      Message.list(channelItem.id).then((response: any) => {
        setMessages(response.data)
      })
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
      socket.off('join_channel')
      socket.emit('leave_channel', channelName)
    };
  }, [])

  useEffect(() => {
    const handleTabClose = (event: any) => {
      event.stopImmediatePropagation();
      socket.emit('leave_channel', `channel_${channel.id}`)
    };

    window.addEventListener('beforeunload', handleTabClose);

    return () => {
      window.removeEventListener('beforeunload', handleTabClose);
    };
  }, [channel]);

  const onSubmitMessage = async (data: any) => {
    data.channel_id = channel.id
    try {
      const response:any = await Message.create(channel.id, {
        message: data.message
      })
      socket.emit('send_message', response.data)
      setMessages([...messages, response.data])
    } catch (e) {
      console.log('onSubmitMessage error...')
    }
  }

  const getCurrentUser = () => {
    return window.localStorage.user ? JSON.parse(window.localStorage.user) : null
  }

  return (
    <div className="w-100 h-100 d-flex" style={{ flexDirection: "column"}}>
      <Header channel={channel}/>
      <Messages
        messages={messages}
        current_user={getCurrentUser()}
      />
      <Footer
        channel={channel}
        onSubmitMessage={(data: any) => onSubmitMessage(data)}
      />
    </div>
  );
}

export default Channel;