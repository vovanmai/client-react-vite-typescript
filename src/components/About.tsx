interface Props{
  id?: number;
  name?: any;
  check: string;
}


const About = ({id, name, check}: Props) => {
  return (
    <>
      <h1>about nek</h1>
      <h1>{id}</h1>
      <h1>{name}</h1>
      <h1>{check}</h1>
    </>
  )
}

About.defaultProps = {
  id: 4545454,
  check: 1212,
}

export default About