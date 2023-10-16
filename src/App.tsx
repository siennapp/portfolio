import React from 'react';
import styled from 'styled-components';
import MainBg from './components/MainBg';
import Main from './pages/Main';
import MainTitle from './components/MainTitle';

const Wrap = styled.div`
  width: 100vw;
  height: auto;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;

`
function App() {
  return (
    <Wrap>
      <MainBg />
      
      <Main />
    </Wrap>
  );
}

export default App;
