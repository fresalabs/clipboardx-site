import React from 'react';
import * as R from 'ramda';
import { SafetyCertificateOutlined, ClockCircleTwoTone, CheckCircleOutlined } from '@ant-design/icons';

import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
`;

const Feature = styled.div`
  text-align: center;
  padding: 30px;
  margin-bottom: 30px;
  color: rgba(255, 255, 255, 0.8);
  margin-left: 20px;
  border-radius: 4px;
  p {
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0;
    margin-inline-end: 0;
    font-size: 1.75em;
    font-weight: 700;
  }
`;

class Guide extends React.Component<any, any> {
  render() {
    const features: Array<{ img: React.ReactNode; description: string }> = [
      {
        img: <SafetyCertificateOutlined style={{ fontSize: 44, color: '#1890ff' }} />,
        description: "Click the 🍏 icon on the top left then System Preferences.",
      },
      {
        img: <ClockCircleTwoTone style={{ fontSize: 44, color: '#1890ff' }} />,
        description: 'Select Users & Groups.',
      },
      {
        img: <CheckCircleOutlined style={{ fontSize: 44, color: '#1890ff' }} />,
        description: "Click Login Items tab then ➕.",
      },
    ];

    return (
      <StyledDiv>
        {R.map(
          (feature) => (
            <Feature>
              <p>{feature.description}</p>
              {feature.img}
            </Feature>
          ),
          features
        )}
      </StyledDiv>
    );
  }
}

export default Guide;
