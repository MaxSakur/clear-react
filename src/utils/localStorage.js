export const addCategoryListToLocalStorage = (data) => {
  const localCategoryList = JSON.stringify(data)
  localStorage.setItem('localCategoryList', localCategoryList)
}