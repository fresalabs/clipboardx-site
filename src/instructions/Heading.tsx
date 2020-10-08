import React from 'react';
import styled from 'styled-components';

const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: rgba(255, 255, 255, 0.8);
  align-items: center;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  span {
    text-align: center;
    font-size: 198%;
    font-family: 'Roboto Mono', monospace;
    font-weight: normal;
  }
  p {
    font-size: 21px;
    font-weight: bolder;
    line-height: 1.2;
    letter-spacing: 5px;
    margin-bottom: 40px;
  }
`;

class Heading extends React.Component<any, any> {
  render() {
    return (
      <HeadingContainer>
        <span>How To Launch On Startup</span>
        <p>The simple guide.</p>
      </HeadingContainer>
    );
  }
}

export default Heading;
