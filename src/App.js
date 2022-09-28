import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateCategoriesAC } from "./store/reducers/categoryReducer";
import MainContainer from "./components/MainContainer";
import Menu from "./components/Menu";
import MainPage from "./components/MainPage";
import { api } from "./api";
import { useWindowSize } from "./hooks";

function App() {
  const dispatch = useDispatch()

  // const [data, changeData] = useState([]);

  // useEffect(() => {
  //   api.getPosts().then((res) => {
  //     changeData(res);
  //   });
  // }, []);

  useEffect(() => {
    const localCategoryList = JSON.parse(localStorage.getItem('localCategoryList'));
    const data = api.getCategories()
    const actualCategoryList = localCategoryList || data
    dispatch(updateCategoriesAC(actualCategoryList))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [width, height] = useWindowSize();
  return (
    <>
      <div>
        width: {width} height: {height}
      </div>

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