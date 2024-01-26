import React from 'react';
import { Button, Col, Image, Row } from 'antd';
import MyQRImage from '@/assets/imgs/my-bank-qr.jpg'
import { Typography } from 'antd';
import { LoginOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Paragraph } = Typography;

const MyBankQR: React.FC = () => {
  return (
    <Row style={{padding: "0 10px"}} className={"h-100"} justify={"center"} align={"middle"}>
      <Col span={24} md={12} xl={6}>
        <div>
          <Paragraph copyable={{ text: '56110001034977' }}>Số tài khoản(BIDV): <span style={{color: "#14b8a6"}}>56110001034977</span></Paragraph>
          <Paragraph>Tên: VO VAN MAI</Paragraph>
        </div>
        <div>
          Hoặc có thể quét mã QR bên dưới:
        </div>
        <Image
          src={MyQRImage}
        />
        <div>
          <div>
            <Link to={"/auth"}>
              <Button type="link" style={{padding: 0}}>
                <LoginOutlined />
                Đăng nhập
              </Button>
            </Link>
          </div>
          <div>
            <Link to={"/chat/join"}>
              <Button type="link" style={{padding: 0}}>
                <LoginOutlined />
                Go to chat
              </Button>
            </Link>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default MyBankQR;