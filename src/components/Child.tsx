import {useEffect, useRef} from "react";
const Child = (props: any) => {
  const {array} = props
  const refToTop = useRef<HTMLInputElement>(null);


  useEffect(() => {
    // refToTop.current && refToTop.current.scrollIntoView();
  },[])

  const handleScroll = (e: any) => {
    const el = e.target;
    console.log(el)
  };

  useEffect(() => {
    const element:any = document.getElementById('test')
    element.addEventListener('scroll', handleScroll);
    return () => element.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    console.log(121212)
  })



  return(
    <div>
      <div id="test" style={{height: 500, overflow: "auto"}}>
        {array.map((item:any) => {
          return <div key={item}>{item}</div>
        })}
        <div ref={refToTop}></div>
      </div>
    </div>
  )
}
export default Child