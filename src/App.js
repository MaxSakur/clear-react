import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useWindowSize } from "./hooks";
import { updateCategoriesAC } from "./store/reducers/categoryReducer";
import MainContainer from "./components/MainContainer";
import Menu from "./components/Menu";
import MainPage from "./components/MainPage";
import { api } from "./api";
import { Back, Logo, PracticeLabel } from "./components/UI";
import CategoryList from "./components/CategoryList";

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
    <div className="App">
      <MainContainer>
        {
          width > 992
            ?
            <Menu>
              <Logo />
              <CategoryList />
              <PracticeLabel />
              <Back />
            </Menu>
            : null
        }
        <MainPage width={width} />
      </MainContainer>
    </div>
  );
}

export default App;