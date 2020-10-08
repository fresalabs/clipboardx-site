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
    letter-spacing: 15px;
  }
  p {
    font-size: 21px;
    font-weight: bolder;
    line-height: 1.2;
    letter-spacing: 5px;
    margin-bottom: 40px;
  }
  button {
    border-radius: 4px;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 1.25rem 2.5rem;
    font-size: 20px;
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1);
    font-weight: 700;
    color: #212529;
    background-color: #f8f9fa;
    border: none;
  }
`;

class Heading extends React.Component<any, any> {
  render() {
    return (
      <HeadingContainer>
        <span>ClipboardX</span>
        <p>Copy Save Paste</p>
        <button>Download</button>
      </HeadingContainer>
    );
  }
}

export default Heading;
