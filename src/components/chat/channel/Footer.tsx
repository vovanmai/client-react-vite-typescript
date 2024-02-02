import {Button, Form, Input, message} from "antd"
import {SendOutlined} from "@ant-design/icons"
import {useEffect, useRef, useState} from "react";
import type { InputRef } from 'antd';
import { getRandomInteger } from "@/helpers/helper";
import socket from "@/socket";

const Footer = (props: any) => {
  const { channel } = props
  const { onSubmitMessage } = props
  const messageRef = useRef<InputRef>(null)
  const [timer, setTimer] = useState<any>(null)
  const [typing, setTyping] = useState<boolean>(false)
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const onFinish = (value: any) => {
    const message = value.message?.trim()
    if (message) {
      messageRef.current?.focus()
      form.setFieldValue('message', '');
      onSubmitMessage({
        message: message,
        is_me: true,
        id: getRandomInteger()
      })
    } else {
      messageApi.open({
        type: 'error',
        content: 'Vui lòng nhập trước khi gửi!',
      });
    }
  };

  useEffect(() => {
    if (channel.id) {
      const typingChannel = `typing_channel_${channel.id}`
      socket.on(typingChannel, (isTyping) => {
        setTyping(isTyping)
      })
      return () => {
        const data = {
          channel_id: channel.id,
          is_typing: false,
        }
        socket.emit('typing', data)
        socket.off(typingChannel)
      }
    }
  }, [channel])

  const onTyping = (e: any) => {
    const message = e.target.value.trim()
    if (message) {
      clearTimeout(timer)
      const newTimer = setTimeout(() => {
        const data = {
          channel_id: channel.id,
          is_typing: true,
        }
        socket.emit('typing', data)
      }, 800)
      setTimer(newTimer)
    } else {
      clearTimeout(timer)
      const newTimer = setTimeout(() => {
        const data = {
          channel_id: channel.id,
          is_typing: false,
        }
        socket.emit('typing', data)
      }, 800)
      setTimer(newTimer)
    }
  }
  return (
      <div style={{borderTop: "1px solid #e1dbdb", height: 60, padding: "0 5px", position: "relative" }} className="d-flex align-item-center">
        {contextHolder}
        { typing && <div style={{ position: "absolute", top: -21, color: "gray"}}>Someone is typing...</div>}
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
              onKeyUp={(e) => onTyping(e)}
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