import Message from "@/components/chat/channel/Message"
import InfiniteScroll from "react-infinite-scroll-component";
import { Spin } from 'antd';
import {useEffect} from "react";

type PropType = {
  messages: {message: string, is_me: boolean, id: number}[],
  currentUser: any,
  hasMoreData: boolean,
  handleGetMessages: any,
  change: number,
}

const Messages = (props: PropType) => {
  const { messages, hasMoreData, handleGetMessages, change } = props
  const fetchMoreData = () => {
    handleGetMessages()
  }

  useEffect(() => {
    const element:any = document.getElementById('scroll-into-view')
    console.log(123)
    element.scrollIntoView({ behavior: 'smooth' })
  }, [change])

  const loading = (<div style={{textAlign: "center", padding: "10px 0px"}}><Spin size="small" /></div>)
  const noData = (<div style={{textAlign: "center", padding: "10px 0px", color: "gray"}}>Dữ liệu đã hết</div>)
  return (
    <div
      id="messages"
      style={{
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column-reverse',
        flex: 1,
        padding: "17px 7px"
      }}
    >
      <InfiniteScroll
        inverse={true}
        style={{ display: 'flex', flexDirection: 'column-reverse' }}
        dataLength={messages.length}
        next={fetchMoreData}
        hasMore={hasMoreData}
        scrollableTarget="messages"
        loader={loading}
        endMessage={noData}
      >
        <div id="scroll-into-view"></div>
        {
          messages.length > 0 && messages.map((message) => {
            return <Message
              key={message.id}
              message={message}
              currentUser={props.currentUser}
            />
          })
        }
      </InfiniteScroll>
    </div>
  );
}

export default Messages