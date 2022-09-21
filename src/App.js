import MainContainer from './components/MainContainer';

import Menu from './components/Menu';
import { MainPage } from './components/MainPage/MainPage';
import { Modal } from './components/Modal/Modal';

function App() {
  return (
    <>
      {/* <Modal /> */}
      <div className="App">
        <MainContainer>
          <Menu />
          <MainPage />
        </MainContainer>
      </div>
    </>
  );
}

export default App;