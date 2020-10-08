import React from 'react';
import * as R from 'ramda';
import { SafetyCertificateOutlined, ClockCircleTwoTone, CheckCircleOutlined } from '@ant-design/icons';

import styled from 'styled-components';

const FeaturesContainer = styled.div`
  h1 {
  color: rgba(255, 255, 255, 0.8);
    text-align: center;
    font-weight: bold;
    margin-bottom: 40px;
    padding-top: 40px;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0;
`;

const Feature = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  text-align: center;
  padding: 30px;
  margin-bottom: 30px;
  color: rgba(255, 255, 255, 0.8);
  margin-left: 20px;
  border-radius: 4px;
  max-width: 16%;
  p {
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0;
    margin-inline-end: 0;
  }
`;

class Features extends React.Component<any, any> {
  render() {
    const features: Array<{ icon: React.ReactNode; name: string; description: string }> = [
      {
        icon: <SafetyCertificateOutlined style={{ fontSize: 44, color: '#1890ff' }} />,
        name: 'Accessible',
        description: "A light app that lives on your menu bar. Ready when you 're ready.",
      },
      {
        icon: <ClockCircleTwoTone style={{ fontSize: 44, color: '#1890ff' }} />,
        name: 'Fast',
        description: 'Quickly browse through your history to find what you want. No distractions.',
      },
      {
        icon: <CheckCircleOutlined style={{ fontSize: 44, color: '#1890ff' }} />,
        name: 'Simple',
        description: "You don't need a degree to use this app. It's stimple easy to use.",
      },
    ];

    return (
      <FeaturesContainer>
        <h1>Features</h1>
        <StyledDiv>
          {R.map(
            (feature) => (
              <Feature>
                {feature.icon}
                <h2>{feature.name}</h2>
                <p>{feature.description}</p>
              </Feature>
            ),
            features
          )}
        </StyledDiv>
      </FeaturesContainer>
    );
  }
}

export default Features;
