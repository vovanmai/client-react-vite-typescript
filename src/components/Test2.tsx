import {useEffect, useState} from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import Message from "@/request/Message";
const Test = () => {
  const [messages, setMessages] = useState<any>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [minId, setMinId] = useState<any>(null)
  const [hasMoreData, setHasMoreData] = useState<any>(true)

  useEffect(() => {
    setIsLoading(true)
    Message.list(1).then((response: any) => {
      let apiMessages = response.data
      setMessages([...messages, ...apiMessages])
      setMinId(apiMessages.length > 0 ? apiMessages[apiMessages.length - 1].id : null)
      setHasMoreData(apiMessages.length === 20)
      setIsLoading(false)
    })
  }, [])


  const style = {
    height: 30,
    border: "1px solid green",
    margin: 6,
    padding: 8
  };

  const fetchMoreData = () => {
    if (isLoading) return
    setIsLoading(true)
    Message.list(1, {min_id: minId}).then((response: any) => {
      let apiMessages = response.data
      setMessages([...messages, ...apiMessages])
      setMinId(apiMessages.length > 0 ? apiMessages[apiMessages.length - 1].id : null)
      setIsLoading(false)
      setHasMoreData(apiMessages.length === 20)
    })
  }

  return(
    <div style={{height: "100%", display: "flex", flexDirection: "column"}}>
      <div style={{height: 50, background: "gray"}}></div>
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
          {messages.map((item: any) => (
            <div style={style} key={item.id}>
              {item.id}
            </div>
          ))}
        </InfiniteScroll>
      </div>
      <div style={{height: 50, background: "gray"}}></div>
    </div>
  )
}
export default Test