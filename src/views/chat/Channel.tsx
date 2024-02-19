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
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [minId, setMinId] = useState<any>(null)
  const [hasMoreData, setHasMoreData] = useState<any>(true)

  const getMessages = (channelId: any, params: any = {}) => {
    if (isLoading) return
    Message.list(channelId, params).then((response) => {
      let apiMessages = response.data
      setMessages([...messages, ...apiMessages])
      setMinId(apiMessages.length > 0 ? apiMessages[apiMessages.length - 1].id : null)
      setHasMoreData(apiMessages.length === 20)
      setIsLoading(false)
    })
  }

  useEffect(() => {
    const channels = keyBy(dataChannels, 'id')
    const channelItem = channels[params.id ?? '']
    if (channelItem) {
      setChannel(channelItem)
      getMessages(channelItem.id)
    } else {
      navigate('/chat')
    }

    // join channel
    const channelName = `channel_${channelItem.id}`
    socket.emit('join_channel', {channel_name: channelName})

    const receiveMessage = (data: any) => {
      setMessages((chat:any) => ([data, ...chat]))
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
      setMessages([response.data, ...messages])
      const nestedElement = document.getElementsByClassName('infinite-scroll-component')[0]
      nestedElement.scrollTo(0, nestedElement.scrollHeight + 50);
    } catch (e) {
      console.log('onSubmitMessage error...')
    }
  }

  const getCurrentUser = () => {
    return window.localStorage.user ? JSON.parse(window.localStorage.user) : null
  }

  const handleGetMessages = () => {
    getMessages(channel.id, { min_id: minId })
  }

  return (
    <div className="w-100 h-100 d-flex" style={{ flexDirection: "column"}}>
      <Header channel={channel}/>
      <Messages
        messages={messages}
        currentUser={getCurrentUser()}
        hasMoreData={hasMoreData}
        handleGetMessages={handleGetMessages}
      />
      <Footer
        channel={channel}
        onSubmitMessage={(data: any) => onSubmitMessage(data)}
      />
    </div>
  );
}

export default Channel;