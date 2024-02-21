import { useState } from "react";

export default function App() {
  const [image, setImage] = useState(null);
  const handlePaste = (event: any) => {
    console.log(event.clipboardData.items);
    for (let index in event.clipboardData.items) {
      const item = event.clipboardData.items[index];
      if (item.kind === 'file') {
        const blob = item.getAsFile();
        if (blob.type.startsWith('image')) {
          const reader = new FileReader();
          reader.onload = (e: any) => {
            setImage(e.target.result);
            console.log(e.target.result);
          };
          reader.readAsDataURL(blob);
        }
      }
    }
  };



  return (
    <div>
      <h2>Hello world</h2>

      {/* 👇️ handle paste event on an input field */}
      <input onPaste={handlePaste} type="text" id="message" autoComplete="no" />

      {image && <img src={image} />}
    </div>
  );
}
