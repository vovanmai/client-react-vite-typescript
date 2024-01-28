import React, {useState} from 'react';
import Header from "@/components/chat/channels/Header";
import Channel from "@/components/chat/channel/Channel";
import dataChannels from "@/configs/channels";
type ChannelType = {
  id: number,
  name: string
}

const Channels: React.FC = () => {
  const [channels] = useState<ChannelType[]>(dataChannels)
  return (
    <div className="w-100 h-100 d-flex" style={{ flexDirection: "column"}}>
      <Header/>
      <div style={{ overflowY: "auto"}} className="flex-1">
        {channels.length > 0 && channels.map((channel) => {
          return <Channel key={channel.id} channel={channel}></Channel>
        })}
      </div>
    </div>
  );
}

export default Channels;