import {Button, Form, Input, message} from "antd"
import {SendOutlined} from "@ant-design/icons"
import { useRef } from "react";
import type { InputRef } from 'antd';

const Footer = () => {
  const messageRef = useRef<InputRef>(null)
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const onFinish = (value: any) => {
    const message = value.message.trim()
    if (message !== '') {
      messageRef.current?.focus()
      form.setFieldValue('message', '');
    } else {
      messageApi.open({
        type: 'error',
        content: 'Vui lòng nhập trước khi gửi!',
      });
    }
  };
  return (
      <div style={{borderTop: "1px solid #e1dbdb", height: 60, padding: "0 5px" }} className="d-flex align-item-center">
        {contextHolder}
        <Form
          form={form}
          className="w-100"
          name="basic"
          onFinish={onFinish}
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