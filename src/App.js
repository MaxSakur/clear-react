import MainContainer from "./components/MainContainer";

import Menu from "./components/Menu";
import { MainPage } from "./components/MainPage/MainPage";
import { Modal } from "./components/Modal/Modal";
import { useWindowSize } from "./hooks";

function App() {
  const [width, height] = useWindowSize();
  return (
    <>
      <div>
        width: {width} height: {height}
      </div>

      {width < 1200 && width > 650 ? <Modal /> : null}

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
