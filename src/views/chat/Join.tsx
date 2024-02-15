import React from 'react';
import {Card, Button, Form, Input, message, Col, Row} from 'antd';
import { UserOutlined, LoginOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import User from '@/request/User'

const Join: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const title = <h2 style={{textAlign: "center", color: "white"}}>Chat</h2>
  const navigate = useNavigate();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Thanh cong',
    });
    navigate('/chat')
  };

  const onFinish = async (data: any) => {
    try {
      const response: any = await User.join(data)
      window.localStorage.setItem('access_token', response.data.access_token)
      window.localStorage.setItem('user', JSON.stringify(response.data.user))
      success()
    } catch (e) {
      console.log(e)
      messageApi.open({
        type: 'error',
        content: 'Thất bại',
      });
    }
  };

  const onFinishFailed = () => {
  };

  return (
    <>
      <Row style={{padding: "0 10px"}} className={"h-100"} justify={"center"} align={"middle"}>
        <Col span={24} md={12} xl={6}>
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
                  name="username"
                  rules={[{ required: true, message: 'Vui lòng nhập tên!' }]}
              >
                <Input
                    placeholder="Tên"
                    addonBefore={<UserOutlined />}
                />
              </Form.Item>

              <Form.Item style={{textAlign: "center"}}>
                <Button type="primary" htmlType="submit">
                  <LoginOutlined />
                  Tham gia
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Join;