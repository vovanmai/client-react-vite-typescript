import { useEffect } from "react";

const Test = () => {
  useEffect(() => {
    console.log(1)


    // return 1 function, sẽ được gọi ngay trước khi componentWillUnmount
    return () => {
      console.log('2')
      const clickWindow = () => console.log('88888')
      window.addEventListener('click', clickWindow)

      // window.removeEventListener('click', clickWindow)
    }
  }, [])

  return <div>F12 check log của trình duyệt!</div>
}

export default Test