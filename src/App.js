import { Route, Routes } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import { MainPage } from './components/MainPage/MainPage';

import Menu from './components/Menu';
import { Homepage, Notfoundpage, Practice } from './screens';

// const { Homepage, Practice } = screens

function App() {

  return (
    <>
      <div className="App">
        <MainContainer>
          <Menu />
          <MainPage>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/practice" element={<Practice />} />
              <Route path="*" element={<Notfoundpage />} />
            </Routes>
          </MainPage>
        </MainContainer>
      </div>
    </>
  );
}

export default App;