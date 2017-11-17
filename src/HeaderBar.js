import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderDiv = styled.div`
  height: 50px;
  padding: 20px;
  background-color: purple;
  color: white;
`;

class HeaderBar extends Component {
  render() {
    return (
      <HeaderDiv>
        Header
      </HeaderDiv>
    );
  }
}

export default HeaderBar;
