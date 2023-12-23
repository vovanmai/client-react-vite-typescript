import { Form, Input } from 'antd';
// import React from 'react';
// interface Props{
//   id?: number;
//   name?: any;
//   check: string;
// }




const About = () => {
  const Component = (props: any) => {
    console.log(props)
    return <div>Hello world</div>;
  };
  return (
    <>
      <Form.Item
        label={<Component/>}
        tooltip="What do you want others to call you?"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <h1>about nek</h1>
    </>
  )
}

// About.defaultProps = {
//   id: 4545454,
//   check: 1212,
// }

export default About