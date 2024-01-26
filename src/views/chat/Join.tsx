import React from 'react';
import {Card, Button, Form, Input, message, Col, Row} from 'antd';
import { UserOutlined, LoginOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

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

  const onFinish = () => {
    success()
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
                  name="email"
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