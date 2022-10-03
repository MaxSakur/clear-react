export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
export const UPDATE_ACTIVE_CATEGORY = "UPDATE_ACTIVE_CATEGORY";

const defaultState = {
  categories: [],
  activeCategoryIndex: 0,
};

function categoryReducer(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: action.payload.categories,
      };
    case UPDATE_ACTIVE_CATEGORY:
      return {
        ...state,
        activeCategoryIndex: action.payload.index,
      };
    default:
      return state;
  }
}

export const updateCategoriesAC = (categories) => ({
  type: UPDATE_CATEGORIES,
  payload: {
    categories,
  },
});

export const updateActiveCategoryAC = (index) => ({
  type: UPDATE_ACTIVE_CATEGORY,
  payload: {
    index,
  },
});

export default categoryReducer;
