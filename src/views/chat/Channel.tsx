import Header from "@/components/chat/channel/Header";
import Footer from "@/components/chat/channel/Footer";
import Messages from "@/components/chat/channel/Messages";
import dataChannels from "@/configs/channels";
import { useNavigate, useParams } from "react-router-dom";
import { keyBy } from 'lodash'
import {useEffect, useState} from "react";
import socket from "@/socket";
import Message from '@/request/Message'
import {message} from "antd";

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
  const [messageApi, contextHolder] = message.useMessage();

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
    socket.emit('join_channel', {channel_name: channelName, user: getCurrentUser()})

    socket.on('receive_message', (data: any) => {
      setMessages((chat:any) => ([data, ...chat]))
    })

    socket.on('user-just-joined', (data:any) => {
      const user = data.user
      messageApi.open({
        type: 'success',
        content: `${user.username} vừa vào channel này.`,
      });
    })

    socket.on('user-just-leave', (data:any) => {
      const user = data.user
      messageApi.open({
        type: 'error',
        content: `${user.username} vừa rời khỏi channel này.`,
      });
    })

    socket.on('remove-all-message', () => {
      setMessages([])
    })
    return () => {
      socket.off(channelName)
      socket.off('receive_message')
      socket.off('join_channel')
      socket.off('user-just-joined')
      socket.off('user-just-leave')
      socket.off('remove-all-message')
      socket.emit('leave_channel', {
        channel_name: channelName,
        user: getCurrentUser()
      })
    };
  }, [])

  useEffect(() => {
    const handleTabClose = (event: any) => {
      event.stopImmediatePropagation();
      socket.emit('leave_channel', {
        channel_name: `channel_${channel.id}`,
        user: getCurrentUser()
      })
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

  const handleRemoveMessages = async () => {
    try {
      await Message.deleteAll(channel.id)
      messageApi.open({
        type: 'success',
        content: 'Xóa tất cả tin nhắn thành công.',
      });
      setMessages([])
      socket.emit('remove-all-message', {
        channel_name: `channel_${channel.id}`
      })
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="w-100 h-100 d-flex" style={{ flexDirection: "column"}}>
      {contextHolder}
      <Header
        channel={channel}
        handleRemoveMessages={handleRemoveMessages}
      />
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