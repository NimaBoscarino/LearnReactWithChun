import React, { Component } from 'react';
import styled from 'styled-components';

const SideDiv = styled.div`
  flex: 0.3;
  padding: 20px;
  background-color: blue;
  color: white;
`;
class SideBar extends Component {
  render() {
    return (
      <SideDiv>
        Side bar
      </SideDiv>
    );
  }
}

export default SideBar;
