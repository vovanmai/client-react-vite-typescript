import { useState } from "react";
import { Input } from 'antd';

const Test = () => {
  // const [messages, setMessages] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])
  //
  // useEffect(() => {
  //   const handleScroll = (event: any) => {
  //     const target: any = event.target
  //     console.log(target.scrollTop)
  //
  //     const check = target.scrollHeight - (Math.abs(target.scrollTop) + target.clientHeight)
  //     console.log(check)
  //     if (check === 0 || check === 1) {
  //       setMessages((old: any) => {
  //         return [
  //           Math.random(),
  //           Math.random(),
  //           Math.random(),
  //           Math.random(),
  //           ...old
  //         ]
  //       })
  //     }
  //   };
  //
  //   const element: any = document.getElementById('scroll-div')
  //
  //   element.addEventListener('scroll', handleScroll);
  //
  //   return () => {
  //     element.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  //
  // const scroll: any = () => {
  //   const element = document.getElementById('section-1');
  //   if (element) {
  //     // 👇 Will scroll smoothly to the top of the next section
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }
  //
  // const setPrevious = () => {
  //   setMessages((old: any) => {
  //     return [
  //       Math.random(),
  //       ...old
  //     ]
  //   })
  // }
  //
  // const setNext = () => {
  //   setMessages((old: any) => {
  //     return [
  //       ...old,
  //       Math.random()
  //     ]
  //   })
  // }
  //
  // return(
  //   <div>
  //     <button onClick={() => {setPrevious()}}>Add previous</button>
  //     <button onClick={() => {setNext()}}>Add next</button>
  //     <button onClick={() => {scroll()}}>Scroll</button>
  //     <div id="scroll-div" style={{
  //       height: 502,
  //       width: 500,
  //       overflowY: "scroll",
  //       display: "flex",
  //       flexDirection: "column-reverse",
  //       border: "1px solid red",
  //     }}>
  //       <div id="section-1"></div>
  //       <div style={{display: "flex", flexDirection: "column", background: "#e3e3e3"}}>
  //         {messages.map((item) => {
  //           return <div key={item} style={{padding: 10}}>{item}</div>
  //         })}
  //       </div>
  //     </div>
  //   </div>
  // )

  const [imageUrl, setImageUrl] = useState<any>(null);

  const handlePaste = async (event: any) => {
    console.log(event)
    const clipboardData = event.clipboardData
    const items = clipboardData.items;

    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf('image') !== -1) {
        const blob = items[i].getAsFile();
        const blobUrl = URL.createObjectURL(blob);
        setImageUrl(blobUrl);
      }
    }
  };

  return (
    <div>
      <h1>Paste Image from Clipboard</h1>
      <input type="text" placeholder="Try pasting an image from clipboard" onPaste={handlePaste} />
      <Input onPaste={handlePaste} placeholder="Basic usage" />
      {imageUrl && (
        <div>
          <p>Image pasted from clipboard:</p>
          <a href={imageUrl} download="pasted_image.png">
            Download Image
          </a>
          <br />
          <img src={imageUrl} alt="Pasted from clipboard" />
        </div>
      )}
    </div>
  );
}
export default Test