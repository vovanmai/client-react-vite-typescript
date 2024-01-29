import Message from "@/components/chat/channel/Message"

type PropType = {
  messages: {message: string, is_me: boolean, id: number}[]
}

const Messages = (props: PropType) => {
  const { messages } = props

  return (
    <div style={{ overflowY: "auto", padding: "10px 5px" }} className="flex-1">
      {
        messages.length > 0 && messages.map((message) => {
          return <Message key={message.id} message={message}/>
        })
      }
    </div>
  );
}

export default Messages