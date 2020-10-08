import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  h2 {
    color: white;
    font-size: 50px;
    padding-top: 0;
    margin-top: 35px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 40px;
  }
  p {
    color: white;
    font-size: 24px;
    text-align: center;
  }
`;

class About extends React.Component<any> {
  render() {
    return (
      <AboutContainer>
        <h2>About</h2>
        <p>"I heard you like copies, so I saved a copy of your copy so you can copy your copies"</p>
      </AboutContainer>
    );
  }
}

export default About;
