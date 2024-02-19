import Message from "@/components/chat/channel/Message"
import InfiniteScroll from "react-infinite-scroll-component";
// import { useRef, useEffect } from "react"

type PropType = {
  messages: {message: string, is_me: boolean, id: number}[],
  currentUser: any,
  hasMoreData: boolean,
  handleGetMessages: any
}

const Messages = (props: PropType) => {
  const { messages, hasMoreData, handleGetMessages } = props
  const fetchMoreData = () => {
    handleGetMessages()
  }
  return (
    <div
      id="scrollableDiv"
      style={{
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column-reverse',
        flex: 1
      }}
    >
      <InfiniteScroll
        inverse={true}
        style={{ display: 'flex', flexDirection: 'column-reverse' }}
        dataLength={messages.length}
        next={fetchMoreData}
        hasMore={hasMoreData}
        scrollableTarget="scrollableDiv"
        loader={<h1>Loading...</h1>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
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