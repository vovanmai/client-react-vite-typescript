import React from 'react';
import Header from "@/components/chat/channels/Header";

const Channels: React.FC = () => {
  return (
    <div className="w-100 h-100 d-flex" style={{ flexDirection: "column"}}>
        <Header/>
      <div style={{borderRight: "1px solid #e1dbdb", borderLeft: "1px solid #e1dbdb"}} className="flex-1">body</div>
      <div style={{border: "1px solid #e1dbdb", height: 50}}>footer</div>
    </div>
  );
}

export default Channels;