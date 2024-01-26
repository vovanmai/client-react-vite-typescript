import React from 'react';
import { Col, Row } from 'antd';
import { Outlet } from "react-router-dom";

const AuthLayout: React.FC = () => {
  return (
    <Row className={"h-100"} justify={"center"} align={"middle"}>
        <Col span={24} xl={12} className={"h-100 w-100"}>
            <Outlet/>
        </Col>
    </Row>
  );
}

export default AuthLayout;