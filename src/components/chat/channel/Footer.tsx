import {Button, Form, Input, message} from "antd"
import {SendOutlined} from "@ant-design/icons"
import {useEffect, useRef, useState} from "react";
import type { InputRef } from 'antd';
import socket from "@/socket";
import PreviewImageBeforeSend from "@/components/chat/channel/PreviewImageBeforeSend";

const Footer = (props: any) => {
  const { channel } = props
  const { onSubmitMessage } = props
  const messageRef = useRef<InputRef>(null)
  const [timer, setTimer] = useState<any>(null)
  const [typing, setTyping] = useState<boolean>(false)
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const [images, setImages] = useState<any>([])
  const onFinish = (value: any) => {
    const message = value.message?.trim()
    if (message || images.length > 0) {
      messageRef.current?.focus()
      form.setFieldValue('message', '');
      onSubmitMessage({
        message: message,
        images: images
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

  const handlePaste = async (event: any) => {
    const clipboardData = event.clipboardData
    const items = clipboardData.items;
    for (const item of items) {
      if (item.type.indexOf('image') !== -1) {
        const blob = item.getAsFile();
        const blobUrl = URL.createObjectURL(blob);
        const image = {
          blob_url: blobUrl,
          content: blob
        }
        setImages([...images, image])
      }
    }
  };

  return (
      <div
        style={{
          borderTop: "1px solid #e1dbdb",
          padding: 10,
          position: "relative",
          justifyContent: "center",
          flexDirection: "column"
        }}
        className="d-flex"
      >
        {contextHolder}
        { typing && <div style={{ position: "absolute", top: -21, color: "gray"}}>Someone is typing...</div>}
        <PreviewImageBeforeSend
          images={images}
        />
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
              placeholder="Vui lòng nhâp..."
              ref={messageRef}
              onKeyUp={(e) => onTyping(e)}
              onPaste={handlePaste}
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