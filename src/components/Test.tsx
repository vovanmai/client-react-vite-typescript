import {useState} from "react";

const Test = () => {
  const [messages, setMessages] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18])
  return(
    <div>
      <button onClick={() => {setMessages([Math.random(), ...messages])}}>Add</button>
      <div style={{
        height: 500,
        width: 500,
        overflowY: "scroll",
        display: "flex",
        flexDirection: "column-reverse",
        border: "1px solid red",
      }}>
        {messages.map((item) => {
          return <div style={{border: "1px solid gray", padding: 10}}>{item}</div>
        })}
      </div>
    </div>
  )
}
export default Test