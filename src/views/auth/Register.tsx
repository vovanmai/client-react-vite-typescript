import React from 'react';
import { Card } from 'antd';

const Register: React.FC = () => {
  const title = <h2 style={{textAlign: "center", color: "white"}}>Đăng ký</h2>
  return (
    <Card
      title={title}
      hoverable
      headStyle={{
        background: "#14b8a6"
      }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  );
}

export default Register;