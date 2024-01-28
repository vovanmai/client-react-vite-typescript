import {Button, Form, Input} from "antd"
import {SendOutlined} from "@ant-design/icons"
import { useRef, useEffect } from "react";
import type { InputRef } from 'antd';

const Footer = () => {
  const messageRef = useRef<InputRef>(null)
  useEffect(() => {
    messageRef.current?.focus()
  }, []);
  const [form] = Form.useForm();
  const onFinish = () => {
    messageRef.current?.focus()
    form.setFieldValue('message', '');
  };

  const onFinishFailed = () => {
  };
  return (
      <div style={{borderTop: "1px solid #e1dbdb", height: 60, padding: "0 5px" }} className="d-flex align-item-center">
        <Form
          form={form}
          className="w-100"
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="inline"
        >
          <Form.Item
            name="message"
            style={{flex: 1}}
          >
            <Input
              size="large"
              className="w-100"
              placeholder=""
              ref={messageRef}
            />
          </Form.Item>

          <Form.Item style={{margin: 0}}>
            <Button size="large" type="primary" htmlType="submit">
              <SendOutlined />
            </Button>
          </Form.Item>
        </Form>
      </div>
  );
}

export default Footer