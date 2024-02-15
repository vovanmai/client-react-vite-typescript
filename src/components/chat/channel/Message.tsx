import { Avatar, Tooltip } from "antd";

const Message = (props: any) => {
  const { message, currentUser } = props
  const isMe = message.user_id === currentUser?.id
  const avatarName = message.user.username.substring(0, 1).toUpperCase()
  return (
    <>
      {
        isMe
        && (<div style={{display: "flex", justifyContent: "end", marginBottom: 10}}>
          <div
            style={{
              width: "70%",
              border: "1px solid #e4dbdb",
              minHeight: "40px",
              padding: 10,
              borderRadius: 20,
              background: "#14b8a6",
              color: "#ffffff",
              wordBreak: "break-word"
            }}
          >
            {message.message}
          </div>
        </div>)
      }

      {
        !isMe
        && (<div style={{display: "flex", justifyContent: "start", marginBottom: 10}}>
          <div style={{marginRight: 10}}>
            <Tooltip placement="top" title={message.user.username}>
              <Avatar size="small" style={{ backgroundColor: '#87d068' }}>{avatarName}</Avatar>
            </Tooltip>
          </div>
          <div
            style={{
              width: "70%",
              border: "1px solid #edeaea",
              minHeight: "40px",
              padding: 10,
              borderRadius: 20,
              wordBreak: "break-word",
              background: "#F0F0F0"
            }}
          >
            {message.message}
          </div>
        </div>)
      }
    </>
  );
}

export default Message