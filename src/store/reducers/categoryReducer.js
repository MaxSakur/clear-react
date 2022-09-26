export const UPDATE_CATEGORIES = 'UPDATE_CATEGORIES';

const defaultState = {
  categories: [],
  activeCategoryIndex: 0
}

function categoryReducer(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: action.payload.categories,
      };
    default:
      return state
  }
}

export const updateCategoriesAC = (categories) => ({
  type: UPDATE_CATEGORIES,
  payload: {
    categories,
  },
});

export default categoryReducer