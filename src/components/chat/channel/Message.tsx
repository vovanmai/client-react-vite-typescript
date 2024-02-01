const Message = (props: any) => {
  const { message } = props
  return (
    <>
      {
        message.is_me
        && (<div style={{display: "flex", justifyContent: "end", marginBottom: 5}}>
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
        !message.is_me
        && (<div style={{display: "flex", justifyContent: "start", marginBottom: 5}}>
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