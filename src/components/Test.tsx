import {useEffect, useState} from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import Message from "@/request/Message";
const Test = () => {
  const [messages, setMessages] = useState<any>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [minId, setMinId] = useState<any>(null)
  const [hasMoreData, setHasMoreData] = useState<any>(true)

  const direction:string = 'top'
  // const direction:string = 'bottom'

  useEffect(() => {
    setIsLoading(true)
    Message.list(1).then((response: any) => {
      let apiMessages = response.data
      if (direction === 'top') {
        apiMessages = apiMessages.reverse()
        setMessages([...apiMessages, ...messages])
        setMinId(apiMessages.length > 0 ? apiMessages[0].id : null)
        const element:any = document.getElementById('test')
        element.scrollTo(0, 500)
      } else {
        setMessages([...messages, ...apiMessages])
        setMinId(apiMessages.length > 0 ? apiMessages[apiMessages.length - 1].id : null)
        const element:any = document.getElementById('test')
        element.scrollTo(0, 1)
      }
      setHasMoreData(apiMessages.length === 20)
      setIsLoading(false)
    })
  }, [])

  const handleScroll = (e: any) => {
    if (isLoading) return

    const el = e.target;
    let check: boolean

    if (direction === 'top') {
      check = el.scrollTop === 0 && hasMoreData
    } else {
      check = el.scrollTop + el.clientHeight >= el.scrollHeight && hasMoreData
    }

    if (check) {
      setIsLoading(true)
      Message.list(1, {min_id: minId}).then((response: any) => {
        let apiMessages = response.data
        if (direction === 'top') {
          apiMessages = apiMessages.reverse()
          setMessages((oldArray: any) => oldArray.unshift(...apiMessages));
          setMinId(apiMessages.length > 0 ? apiMessages[0].id : null)
        } else {
          setMessages([...messages, ...apiMessages])
          setMinId(apiMessages.length > 0 ? apiMessages[apiMessages.length - 1].id : null)
        }
        setIsLoading(false)
        setHasMoreData(apiMessages.length === 20)
      })
    }
  };

  useEffect(() => {
    const element:any = document.getElementById('test')
    element.addEventListener('scroll', handleScroll);
    return () => element.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  return(
    <div>
      { direction === 'top' && isLoading && <div>Loading...</div> }
      { direction === 'top' && !hasMoreData && <div>No data...</div> }
      <div id="test" style={{height: 500, overflow: "auto"}}>
        {messages.map((item:any) => {
          return <div style={{border: "1px solid gray", padding: "10px 0px"}} key={item.id}>{item.id}</div>
        })}
      </div>
      { direction === 'bottom' && isLoading && <div>Loading...</div> }
      { direction === 'bottom' && !hasMoreData && <div>No data...</div> }
    </div>
  )
}
export default Test