import Parent from "@/components/Parent"
import { useEffect } from "react";

const Test = () => {
  useEffect(() => {
  }, [])
  return (
    <>
      <h1>FOR TEST</h1>
      <Parent></Parent>
    </>
  )
}

export default Test