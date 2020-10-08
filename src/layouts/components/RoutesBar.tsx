import React from 'react';
import styled from 'styled-components';
import * as R from 'ramda';
import { menuItems } from '../contants';
import history from '../../history';
import ClipBoardX from '../../icons/Clipboardx';

const Container = styled.div`
  flex-basis: 33%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
`;

const Selected = styled.div<{ selected: boolean } & React.HTMLProps<HTMLDivElement>>`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
`;

const StyledDiv = styled.div`
  color: #465765;
  padding: 20px;
  cursor: pointer;
`;

const AppBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

class RoutesBar extends React.Component {
  render() {
    return (
      <AppBar>
        <ClipBoardX />
        <Container>
          {R.map(
            (item) => (
              <Selected selected={history.location.pathname === item.path()} onClick={() => history.push(item.path())}>
                <StyledDiv>{item.name}</StyledDiv>
              </Selected>
            ),
            menuItems
          )}
        </Container>
      </AppBar>
    );
  }
}

export default RoutesBar;
