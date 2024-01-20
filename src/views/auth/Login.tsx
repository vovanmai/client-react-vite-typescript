import React from 'react';
import { Card, Button, Form, Input, message } from 'antd';
import { UserOutlined, LockOutlined, LoginOutlined } from "@ant-design/icons";

const Login: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const title = <h2 style={{textAlign: "center", color: "white"}}>Đăng nhập</h2>
  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Tài khoản không đúng. Vui lòng thử lại.',
    });
  };

  const onFinish = () => {
    error()
  };

  const onFinishFailed = () => {

  };

  return (
    <>
      {contextHolder}
      <Card
        title={title}
        hoverable
        headStyle={{
          background: "#14b8a6"
        }}
      >
        <Form
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Vui lòng nhập username or email!' }]}
          >
            <Input
              placeholder="Username or email"
              addonBefore={<UserOutlined />}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
          >
            <Input.Password
              placeholder="Mật khẩu"
              addonBefore={<LockOutlined />}
            />
          </Form.Item>

          <Form.Item style={{textAlign: "center"}}>
            <Button type="primary" htmlType="submit">
              <LoginOutlined />
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
}

export default Login;