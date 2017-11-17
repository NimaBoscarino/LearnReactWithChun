import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

import HeaderBar from './HeaderBar.js'
import MainSection from './MainSection.js'
import SideBar from './SideBar.js'

const MainContainer = styled.div`
  display: flex;
  flex: 1;
`;

const AppContainer = styled.div`
height: 100%;
display: flex;
flex-direction: column;
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <HeaderBar />
        <MainContainer>
          <MainSection />
          <SideBar />
        </MainContainer>
      </AppContainer>
    );
  }
}

export default App;
