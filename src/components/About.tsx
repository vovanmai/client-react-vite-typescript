import React from 'react';
import { Button, Flex } from 'antd';
import {useNavigate} from "react-router-dom";

const About: React.FC = () => {
    const navigate = useNavigate();

    return (
      <Flex gap="small" wrap="wrap">
          <Button onClick={() => {navigate('/staffs')}} type="primary">Primary Button</Button>
      </Flex>
    );
}

export default About;