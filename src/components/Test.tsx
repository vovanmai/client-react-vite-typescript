import { useState } from "react";

const Test = () => {
  const [counter, setCounter] = useState(0);

  // 👇️ may return a value before hook below runs
  if (counter > 0) {
    return <h1>Hello world</h1>;
  }

  // ⛔️ Rendered fewer hooks than expected.
  // This may be caused by an accidental early return statement
  

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Increment count</button>
    </div>
  );
}

export default Test