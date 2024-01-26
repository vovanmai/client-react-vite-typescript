import React from 'react';
import { Row, Col } from 'antd';
import { Outlet } from "react-router-dom";

const AuthLayout: React.FC = () => {
  return (
    <Row style={{padding: "0 5px"}} className={"h-100"} justify={"center"} align={"middle"}>
      <Col span={24} md={12} xl={6}>
        <Outlet/>
      </Col>
    </Row>
  );
}

export default AuthLayout;