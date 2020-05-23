import axios from "axios";
export const getCategoryList = () => {
  return axios
    .get("https://api.chucknorris.io/jokes/categories")
    .then((res) => res.data);
};
export const getRandom = () => {
  return axios
    .get("https://api.chucknorris.io/jokes/random")
    .then((res) => [res.data]);
};
export const getCategories = (category) => {
  return axios
    .get(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then((res) => [res.data]);
};
export const getSearch = (query) => {
  return axios
    .get(`https://api.chucknorris.io/jokes/search?query=${query}`)
    .then((res) => res.data.result);
};
