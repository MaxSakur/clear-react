import MainContainer from "./components/MainContainer";

import Menu from "./components/Menu";
import { MainPage } from "./components/MainPage/MainPage";
import { Modal } from "./components/Modal/Modal";
import { useWindowSize } from "./hooks";
import { useEffect, useState } from "react";
import { api } from "./api";
import { useDispatch } from "react-redux";
import { updateCategoriesAC } from "./store/reducers/categoryReducer";

function App() {
  const dispatch = useDispatch()
  // const [data, changeData] = useState([]);

  // useEffect(() => {
  //   api.getPosts().then((res) => {
  //     changeData(res);
  //   });
  // }, []);

  useEffect(() => {
    const data = api.getCategories()
    dispatch(updateCategoriesAC(data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
