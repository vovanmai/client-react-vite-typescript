import Header from "@/components/chat/channel/Header";
import Footer from "@/components/chat/channel/Footer";
import dataChannels from "@/configs/channels";
import {useParams} from "react-router-dom";
import { keyBy } from 'lodash'


const Channel = () => {
  const params = useParams()
  const channels = keyBy(dataChannels, 'id')
  const channel = channels[params.id ?? '']
  return (
    <div className="w-100 h-100 d-flex" style={{ flexDirection: "column"}}>
      <Header channel={channel}/>
      <div style={{borderRight: "1px solid #e1dbdb", borderLeft: "1px solid #e1dbdb", overflowY: "auto"}} className="flex-1">

      </div>
      <Footer/>
    </div>
  );
}

export default Channel;