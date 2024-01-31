import { useState } from "react";
const fakeApi = () => console.log('Api is called')

const Test = () => {
  const [inputValue, setInputValue] = useState('')
  const [timer, setTimer] = useState<any>(null)

  const inputChanged = (e: any) => {
    setInputValue(e.target.value)

    clearTimeout(timer)

    const newTimer = setTimeout(() => {
      fakeApi()
    }, 500)

    setTimer(newTimer)
  }

  return (
    <div>
      <label>Input: </label>
      <input value={inputValue} type="text" onChange={inputChanged} />
    </div>
  )
}

export default Test