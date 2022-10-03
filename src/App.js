import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useWindowSize } from "./hooks";
import { updateCategoriesAC } from "./store/reducers/categoryReducer";
import MainContainer from "./components/MainContainer";
import Menu from "./components/Menu";
import MainPage from "./screens/MainPage";
import VerticalCarousel from "./components/VerticalCarousel";
import { Logo } from "./components/UI";
import { api } from "./api";
import {
  V_CAROUSEL_ITEM_HEIGHT,
  V_CAROUSEL_VISIBLE_ITEMS_QUANTITY,
} from "./assets/constants";

function App() {
  const dispatch = useDispatch();

  // const [data, changeData] = useState([]);

  // useEffect(() => {
  //   api.getPosts().then((res) => {
  //     changeData(res);
  //   });
  // }, []);

  useEffect(() => {
    const localCategoryList = JSON.parse(
      localStorage.getItem("localCategoryList")
    );
    const data = api.getCategories();
    const actualCategoryList = localCategoryList || data;
    dispatch(updateCategoriesAC(actualCategoryList));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const categoryList = useSelector((store) => store.categoryList.categories);
  const [width] = useWindowSize();

  return (
    <div className="App">
      <MainContainer>
        {width > 992 ? (
          <Menu>
            <Logo />
            <VerticalCarousel
              maxItemsCount={V_CAROUSEL_VISIBLE_ITEMS_QUANTITY}
              itemHeight={V_CAROUSEL_ITEM_HEIGHT}
              itemsArray={categoryList}
            />
          </Menu>
        ) : null}
        <MainPage width={width} itemsArray={categoryList} />
      </MainContainer>
    </div>
  );
}

export default App;
