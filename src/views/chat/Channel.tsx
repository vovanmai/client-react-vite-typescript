import Header from "@/components/chat/channel/Header";
import Footer from "@/components/chat/channel/Footer";
import dataChannels from "@/configs/channels";
import { useNavigate, useParams } from "react-router-dom";
import { keyBy } from 'lodash'
import {useEffect, useState} from "react";

const Channel = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [channel, setChannel] = useState({
    id: 0,
    name: '',
  })

  useEffect(() => {
    const channels = keyBy(dataChannels, 'id')
    const channelItem = channels[params.id ?? '']
    if (channelItem) {
      setChannel(channelItem)
    } else {
      navigate('/chat')
    }
  })

  return (
    <div className="w-100 h-100 d-flex" style={{ flexDirection: "column"}}>
      <Header channel={channel}/>
      <div style={{ overflowY: "auto" }} className="flex-1">

      </div>
      <Footer/>
    </div>
  );
}

export default Channel;