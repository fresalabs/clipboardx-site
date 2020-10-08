import React from 'react';
import styled from 'styled-components';
import RoutesBar from "./RoutesBar";

const Container = styled.div`
  height: 100%;
  overflow-x: hidden;
`;

const ContentContainer = styled.div`
  margin-bottom: 200px;
  width: 100%;
  min-height: 45vh;
`;

class PrimarySearchAppBar extends React.Component<any> {
  render() {
    const { children } = this.props;
    return (
      <Container>
        <RoutesBar />
        <ContentContainer>{children}</ContentContainer>
      </Container>
    );
  }
}

export default PrimarySearchAppBar;
