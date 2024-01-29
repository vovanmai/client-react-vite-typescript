import Message from "@/components/chat/channel/Message"
import { useRef, useEffect } from "react"

type PropType = {
  messages: {message: string, is_me: boolean, id: number}[]
}

const Messages = (props: PropType) => {
  const bottomRef = useRef<any>(null);
  const { messages } = props

  useEffect(() => {
    bottomRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [messages]);

  return (
    <div style={{ overflowY: "auto", padding: "10px 5px" }} className="flex-1">
      {
        messages.length > 0 && messages.map((message) => {
          return <Message key={message.id} message={message}/>
        })
      }
      <div ref={bottomRef} />
    </div>
  );
}

export default Messages