import {Button, Form, Input} from "antd";
import {SendOutlined} from "@ant-design/icons";

const Footer = () => {
  const onFinish = () => {
  };

  const onFinishFailed = () => {
  };
  return (
      <div style={{borderTop: "1px solid #e1dbdb", height: 45, padding: "0 5px" }} className="d-flex align-item-center">
        <Form
          className="w-100"
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="inline"
        >
          <Form.Item
            name="email"
          >
            <Input
              className="w-100"
              placeholder=""
            />
          </Form.Item>

          <Form.Item style={{textAlign: "center"}}>
            <Button type="primary" htmlType="submit">
              <SendOutlined />
            </Button>
          </Form.Item>
        </Form>
      </div>
  );
}

export default Footer