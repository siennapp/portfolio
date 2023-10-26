import styled from 'styled-components';
import MainBg from './components/MainBg';
import Main from './pages/Main';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import modalReducer from './redux';
import Modal from './pages/Modal';

const store = configureStore({
  reducer: modalReducer
})
const Wrap = styled.div`
  width: 100vw;
  height: auto;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;

`
function App() {
  return (
    <>
      <Provider store={store}>
        <Wrap>
              <MainBg />
              <Main />
              <Modal />
        </Wrap>
      </Provider>
    </>
    
  );
}

export default App;
