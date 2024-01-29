const Message = (props: any) => {
  const { message } = props
  return (
    <>
      <div style={{display: "flex", justifyContent: "end", marginBottom: 5}}>
        <div style={{width: "70%", border: "1px solid #e4dbdb", minHeight: "40px", padding: 10, borderRadius: 7}}>
          {message.message}
        </div>
      </div>
    </>
  );
}

export default Message